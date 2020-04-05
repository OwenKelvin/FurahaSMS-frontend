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
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { loadEditModesSuccess, loadEditModesFailure } from 'src/app/store/actions/edit-mode.actions';
import { CanvasService } from 'src/app/services/canvas.service';

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
  componentIsActive: boolean;
  profPicLoading: boolean;
  constructor(
    private modalService: BsModalService,
    private usersService: UsersService,
    private store: Store,
    private canvasService: CanvasService
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.getProfilePic();
  }
  editModeChangeHandler() {
    this.editMode ? this.store.dispatch(loadEditModesSuccess()) : this.store.dispatch(loadEditModesFailure());
  }
  getProfilePic() {
    this.profPicLoading = true;
    this.usersService.getProfilePicture({ userId: this.profile.id })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        (this.profPic.nativeElement as HTMLImageElement).src = URL.createObjectURL(res);
        this.profPicLoading = false;
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
        next: res => {
          this.savingProfPic = false;
          this.hideModal();
          (this.profPic.nativeElement as HTMLImageElement).src = this.photoSrc;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success!',
            toastTime: 'Just now'
          }));
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
  // fitImageOn(canvas: any, imageObj: any) {
  //   const imageAspectRatio = imageObj.width / imageObj.height;
  //   const canvasAspectRatio = canvas.width / canvas.height;
  //   let renderableHeight;
  //   let renderableWidth;
  //   let xStart;
  //   let yStart;

  //   // If image's aspect ratio is less than canvas's we fit on height
  //   // and place the image centrally along width
  //   if (imageAspectRatio < canvasAspectRatio) {
  //     renderableHeight = canvas.height;
  //     renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
  //     xStart = (canvas.width - renderableWidth) / 2;
  //     yStart = 0;
  //   }

  //   // If image's aspect ratio is greater than canvas's we fit on width
  //   // and place the image centrally along height
  //   else if (imageAspectRatio > canvasAspectRatio) {
  //     renderableWidth = canvas.width;
  //     renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
  //     xStart = 0;
  //     yStart = (canvas.height - renderableHeight) / 2;
  //   }

  //   // Happy path - keep aspect ratio
  //   else {
  //     renderableHeight = canvas.height;
  //     renderableWidth = canvas.width;
  //     xStart = 0;
  //     yStart = 0;
  //   }
  //   this.context.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
  // };

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
