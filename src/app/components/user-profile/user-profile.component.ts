import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  OnDestroy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UsersService } from 'src/app/services/users.service';
import { takeWhile, mergeMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadEditModesSuccess, loadEditModesFailure } from 'src/app/store/actions/edit-mode.actions';
import { CanvasService } from 'src/app/services/canvas.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() profile: any;
  @Input() linkBase: any[];
  @Input() links: any[];
  @Input() includeProfileId = true;
  @ViewChild('profPic') profPic: ElementRef;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  editMode = false;

  photoSrc: any;
  context: any;
  modalRef: BsModalRef;
  savingProfPic: boolean;
  photoFile: File;
  componentIsActive = true;
  profPicLoadingSubject$: Subject<boolean> = new BehaviorSubject(true);
  profPicLoadingAction$ = this.profPicLoadingSubject$.asObservable();
  constructor(
    private modalService: BsModalService,
    private usersService: UsersService,
    private store: Store,
    private canvasService: CanvasService
  ) { }

  ngOnInit() {
    this.getProfilePic();
  }
  editModeChangeHandler() {
    this.editMode ? this.store.dispatch(loadEditModesSuccess()) : this.store.dispatch(loadEditModesFailure());
  }
  getProfilePic() {
    this.profPicLoadingSubject$.next(true)
    this.usersService.getProfilePicture({ userId: this.profile.id })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        (this.profPic.nativeElement as HTMLImageElement).src = URL.createObjectURL(res);
        this.profPicLoadingSubject$.next(false)
      });
  }
  get fullName(): string {
    return this.profile.firstName + ' ' + this.profile.lastName
      + (this.profile.middleName ? (' ' + this.profile.middleName) : '')
      + (this.profile.otherNames ? (' ' + this.profile.otherNames) : '')
      + (this.profile.userId ? (' ' + this.profile.userId) : '');
  }
  fullLink(link: string) {
    if (this.includeProfileId) {
      return [...this.linkBase, this.profile.id, link];
    }
    return [...this.linkBase, link];
  }
  saveProfilePic() {
    this.savingProfPic = true;
    this.usersService.uploadPhoto({ file: this.photoFile })
      .pipe(
        map((res: any) => res.data.id),
        mergeMap((id: number) => this.usersService.saveProfilePicture({ userId: this.profile.id, profilePicId: id })),
        takeWhile(() => this.componentIsActive)
      )
      .subscribe({
        next: () => {
          this.savingProfPic = false;
          this.hideModal();
          (this.profPic.nativeElement as HTMLImageElement).src = this.photoSrc;
        },
        error: () => this.savingProfPic = false
      });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-md bg-dark text-light modal-container ');
  }

  hideModal() {
    const $input: any = document.querySelector('#profilePhotoInput');
    ($input as HTMLInputElement).value = '';
    this.modalRef.hide();
  }

  onFileSelected(template: TemplateRef<any>) {
    const $input: HTMLInputElement = document.querySelector('#profilePhotoInput') as HTMLInputElement;
    this.photoFile = ($input.files as FileList)[0];
    if (this.photoFile) {
      this.openModal(template);
      const $canvas: any = document.querySelector('#profilePhotoCanvas');
      this.context = $canvas.getContext('2d');
      const imageObj = new Image();


      this.photoSrc = URL.createObjectURL(this.photoFile);
      imageObj.onload = () => {
        this.canvasService.fitImageOn($canvas, imageObj);
      };
      imageObj.src = this.photoSrc;
    }


  }
  changeProfile(fieldName: string, $event: string) {
    this.valueChanged.emit({ fieldName, fieldNewValue: $event });
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
