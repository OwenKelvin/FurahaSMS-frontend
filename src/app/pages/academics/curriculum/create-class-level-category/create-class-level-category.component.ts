import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassLevelCategoryInterface } from 'src/app/interfaces/class-level-category.interface';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { map } from 'rxjs/operators';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';
import { VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM } from 'src/app/helpers/links.helpers';

@Component({
  selector: 'app-create-class-level-category',
  templateUrl: './create-class-level-category.component.html',
  styleUrls: ['./create-class-level-category.component.css']
})
export class CreateClassLevelCategoryComponent implements OnInit {

  showErrorMessage: boolean;
  formId: any;
  submitInProgress: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private classLevelCategory: ClassLevelCategoryService,
    private router: Router
  ) { }
  errors: {
    name: string;
  };
  classLevelCategoryForm: FormGroup;
  newForm: boolean;

  ngOnInit() {
    this.newForm = true;
    this.errors = {
      name: ''
    };
    this.generateClassLevelCategoryForm();
    let activatedRoute: ActivatedRouteSnapshot;
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      const id = activatedRoute.params.id;

      if (id === undefined) {
        this.newForm = true;
      } else {
        this.newForm = false;
        this.formId = id;
        this.classLevelCategory.get({ id }).subscribe(item => {
          this.generateClassLevelCategoryForm(item);
        });
      }
    }
  }
  generateClassLevelCategoryForm(
    { id = null, name = '', active = true, description = '' }: ClassLevelCategoryInterface = {
      id: null,
      name: '',
      active: true,
      description: ''
    }
  ) {
    this.classLevelCategoryForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      active: [active],
      description: [description]
    });
  }
  validateName() {
    if (
      (this.classLevelCategoryForm.get('name').dirty ||
        this.classLevelCategoryForm.get('name').touched) &&
      !this.classLevelCategoryForm.get('name').valid
    ) {
      if (this.classLevelCategoryForm.get('name').errors.required) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = null;
      }
    }
  }

  submit() {
    this.submitInProgress = true;
    if (this.classLevelCategoryForm.valid) {
      this.classLevelCategory
        .submit(this.classLevelCategoryForm.value)
        .subscribe(success => {
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastHeader: 'Success',
            toastBody: 'Successfully created class Level category!',
            toastTime: 'Just now'
          }));
          this.router.navigate([VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM(success.id)]);

        }, error => {
            this.submitInProgress = false;
            this.showErrorMessage = true;
            this.store.dispatch(loadErrorMessagesSuccess({
              body: error.help,
              show: true,
              title: error.message,
              status: error.status
            }));
        });
    } else {
      this.classLevelCategoryForm.markAllAsTouched();
      this.validateName();
    }
  }
}
