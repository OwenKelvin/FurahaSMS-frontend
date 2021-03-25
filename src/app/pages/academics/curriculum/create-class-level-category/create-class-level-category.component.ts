import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassLevelCategoryService} from 'src/app/services/class-level-category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassLevelCategoryInterface} from 'src/app/interfaces/class-level-category.interface';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM} from 'src/app/helpers/links.helpers';
import {formWithEditorMixin} from 'src/app/shared/mixins/form-with-editor.mixin';

@Component({
  selector: 'app-create-class-level-category',
  templateUrl: './create-class-level-category.component.html',
  styleUrls: ['./create-class-level-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateClassLevelCategoryComponent extends formWithEditorMixin() implements OnInit {

  classLevelCategoryForm: FormGroup = this.fb.group({
    id: [null],
    name: [name, [Validators.required]],
    active: [false],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private classLevelCategory: ClassLevelCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.generateClassLevelCategoryForm();
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      filter(id => id > 0),
      tap(() => this.editFormSubject$.next(true)),
      mergeMap(id => this.classLevelCategory.get({id})),
      tap((item) => this.generateClassLevelCategoryForm(item))
    ).subscribe();
  }

  generateClassLevelCategoryForm({id = null, name = '', active = true, description = ''}: ClassLevelCategoryInterface =
                                   {id: null, name: '', active: true, description: ''}) {
    this.classLevelCategoryForm.setValue({id, name, active, description});
  }

  submit() {
    if (this.classLevelCategoryForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.classLevelCategory.submit(this.classLevelCategoryForm.value)
        .subscribe({
          next: success => this.router.navigate([VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM(success.id)]),
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      this.classLevelCategoryForm.markAllAsTouched();
    }
  }
}
