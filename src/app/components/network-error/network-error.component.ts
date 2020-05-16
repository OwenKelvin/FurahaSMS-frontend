import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { Observable } from 'rxjs';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { ErrorMessageStateInterface } from 'src/app/store/reducers/error-message.reducer';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrls: ['./network-error.component.css']
})
export class NetworkErrorComponent implements OnInit {
  errorMessage$: Observable<ErrorMessageStateInterface>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.errorMessage$ = this.store.select(selectErrorState);
  }
  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }
}
