import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActivePageStateId } from 'src/app/store/selectors/active-page.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-view-academic-year-info',
  templateUrl: './view-academic-year-info.component.html',
  styleUrls: ['./view-academic-year-info.component.css']
})
export class ViewAcademicYearInfoComponent implements OnInit {
  @Input() params: { id: number };
  id$: Observable<number | null | undefined>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.id$ = this.store.select(selectActivePageStateId);
  }

}
