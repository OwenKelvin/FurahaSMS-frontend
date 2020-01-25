import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-unit-category',
  templateUrl: './view-unit-category.component.html',
  styleUrls: ['./view-unit-category.component.css']
})
export class ViewUnitCategoryComponent implements OnInit {
  unitCategory$: Observable<any>
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>, private unitCategoryService: UnitCategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.unitCategory$ = this.unitCategoryService.getUnitCategoryWithId(+params.get('id'));
    })
   
  }

}
