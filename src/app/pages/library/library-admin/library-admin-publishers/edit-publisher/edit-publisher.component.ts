import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
