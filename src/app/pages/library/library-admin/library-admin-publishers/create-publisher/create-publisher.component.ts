import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-publisher',
  templateUrl: './create-publisher.component.html',
  styleUrls: ['./create-publisher.component.css']
})
export class CreatePublisherComponent implements OnInit {

  isLoading: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  newBookPublisherForm: FormGroup;
  editPage: boolean;
  componentIsActive: boolean;
  constructor(
    private libraryPublisher: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryPublisherService: LibraryPublisherService,
  ) { }

  ngOnInit() {

    this.newBookPublisherForm = this.fb.group({
      id: [0, []],
      name: ['', [Validators.required]],
      biography: ['']
    });
    this.route.paramMap
      .pipe(tap(() => this.isLoading = true))
      .pipe(map(params => +params.get('id')))
      .pipe(mergeMap(id => this.libraryPublisherService.getPublisherWithId(id)))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(publisher => {
        const publisherConverted = publisher as { name: string, id: string, biography: string; };
        this.newBookPublisherForm.get('id').setValue(publisherConverted.id);
        this.newBookPublisherForm.get('name').setValue(publisherConverted.name);
        this.isLoading = false;
       })
    // this.route.paramMap.subscribe(params => {
    //   const id = +params.get('id');
    //   if (id > 0) {
    //     this.editPage = true;
    //     this.isLoading = true;
    //     const sub = this.libraryPublisherService.getPublisherWithId(id).subscribe(publisher => {
    //       const publisherConverted = publisher as { name: string, id: string, biography: string; };
    //       this.newBookPublisherForm.get('id').setValue(publisherConverted.id);
    //       this.newBookPublisherForm.get('name').setValue(publisherConverted.name);
    //       this.isLoading = false;
    //       sub.unsubscribe();
    //     });
    //   }
    // });
  }

  submitNewBookPublisherForm() {
    this.isSubmitting = true;
    this.libraryPublisher.save(this.newBookPublisherForm.value).subscribe(res => {
      this.isSubmitting = false;
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true,
        toastBody: res.message,
        toastHeader: 'Success'
      }));
      this.router.navigate(['library', 'admin', 'publishers', res.data.id, 'view']);
    }, err => {
      this.isSubmitting = false;
    });
  }

}
