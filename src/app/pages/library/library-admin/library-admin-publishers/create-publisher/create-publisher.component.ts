import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { map, mergeMap, takeWhile, tap, filter } from 'rxjs/operators';

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
      .pipe(
        map(params => Number(params.get('id'))),
        filter(id => id > 0),
        tap(() => {
          this.isLoading = true;
          this.editPage = true;
        }),
        mergeMap(id => this.libraryPublisherService.getPublisherWithId(id)),
        takeWhile(() => this.componentIsActive))
      .subscribe({
        next: (publisher: any) => {
          this.newBookPublisherForm.setValue({
            id: publisher.id,
            name: publisher.name,
            biography: publisher.biography
          });
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  submitNewBookPublisherForm() {
    this.isSubmitting = true;
    this.libraryPublisher.save(this.newBookPublisherForm.value)
      .subscribe({
        next: res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success',
            toastTime: 'Just Now'
          }));
          this.router.navigate(['library', 'admin', 'publishers', res.data.id, 'view']);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
  }

}
