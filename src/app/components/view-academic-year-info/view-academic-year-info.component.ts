import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { selectActivePageStateId } from 'src/app/store/selectors/active-page.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-academic-year-info',
  templateUrl: './view-academic-year-info.component.html',
  styleUrls: ['./view-academic-year-info.component.css']
})
export class ViewAcademicYearInfoComponent implements OnInit {
  @Input() params: { id: number };
  id$: Observable<number>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.id$ = this.store.select(selectActivePageStateId);
    // this.store.select(selectActivePageStateId).subscribe(item => {
    //   alert(item)
    // });
  }

}
