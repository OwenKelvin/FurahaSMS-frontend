import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { AppState } from 'src/app/store/reducers';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { map, filter, tap, mergeMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  newBookTagForm: FormGroup;
  editPage: boolean;
  componentIsActive: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryTagService: LibraryBookTagService,
  ) { }

  ngOnInit() {
    this.componentIsActive = false;
    this.newBookTagForm = this.fb.group({
      id: [0, []],
      name: ['', [Validators.required]],
    });
    this.route.paramMap
      .pipe(tap(() => {
        this.editPage = true;
        this.isLoading = true;
      }))
      .pipe(map(params => Number(params.get('id'))))
      .pipe(filter(id => id > 0))
      .pipe(mergeMap(id => this.libraryTagService.getTagWithId(id)))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(tag => {
        const tagConverted = tag as { name: string; id: string; biography: string };
        (this.newBookTagForm.get('id') as FormControl).setValue(tagConverted.id);
        (this.newBookTagForm.get('name') as FormControl).setValue(tagConverted.name);
        this.isLoading = false;
      });
    // this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   if (id > 0) {
    //     this.editPage = true;
    //     this.isLoading = true;
    //     const sub = this.libraryTagService.getTagWithId(id).subscribe(tag => {
    //       const tagConverted = tag as { name: string, id: string, biography: string; };
    //       this.newBookTagForm.get('id').setValue(tagConverted.id);
    //       this.newBookTagForm.get('name').setValue(tagConverted.name);
    //       this.isLoading = false;
    //       sub.unsubscribe();
    //     });
    //   }
    // });
  }

  submitNewBookTagForm() {
    this.isSubmitting = true;
    this.libraryTagService.save(this.newBookTagForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
      this.isSubmitting = false;
      this.router.navigate(['library', 'admin', 'tags', res.data.id, 'view']);
    }, () => {
      this.isSubmitting = false;
    });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
