import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() title: string;
  @Input() service: { getItemById: (id: number) => Observable<any>};
  item$: Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // TODO-me-urgent This is calling 1??
    this.item$ = this.service.getItemById(1);
  }

}
