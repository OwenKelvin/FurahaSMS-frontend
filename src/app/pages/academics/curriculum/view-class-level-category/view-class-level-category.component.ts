import { Component } from '@angular/core';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';
import { selectICan } from 'src/app/pages/my-profile/store/selectors/my-profile.selectors';
import { Store, select } from '@ngrx/store';

@Component({
  templateUrl: './view-class-level-category.component.html',
  styleUrls: ['./view-class-level-category.component.css']
})
export class ViewClassLevelCategoryComponent {

  iCanEditClassLevel$ = this.store.pipe(select(selectICan('update class level')));

  classLevelCategory$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.classLevelCategoryService.getCategoryWithId(id))
  );

  constructor(
    private classLevelCategoryService: ClassLevelCategoryService,
    private route: ActivatedRoute,
    private store: Store
  ) { }

}
