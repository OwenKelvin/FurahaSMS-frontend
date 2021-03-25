import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';

import { VIEW_LIBRARY_PUBLISHER, EDIT_LIBRARY_PUBLISHER, CREATE_LIBRARY_PUBLISHER } from '../../helpers/links.helpers';
import { LibraryPublisherService } from '../../services/library-publisher.service';
import { takeWhile, map, filter } from 'rxjs/operators';
import { selectLibraryBookPublishers } from '../../store/selectors/library.selectors';
import { removeLibraryBookPublisher } from '../../store/actions/library-book-publisher.actions';

@Component({
  selector: 'app-library-admin-publishers',
  templateUrl: './library-admin-publishers.component.html',
  styleUrls: ['./library-admin-publishers.component.css']
})
export class LibraryAdminPublishersComponent implements OnInit, OnDestroy {
  createPublisher: string;
  editPublisher: (id: string | number) => string;
  viewPublisher: (id: string | number) => string;
  categories: any;
  componentIsActive: boolean;

  constructor(private store: Store<any>, private bookPublisherService: LibraryPublisherService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.bookPublisherService.loadAll$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe();

    this.createPublisher = CREATE_LIBRARY_PUBLISHER;
    this.editPublisher = EDIT_LIBRARY_PUBLISHER;
    this.viewPublisher = VIEW_LIBRARY_PUBLISHER;
    this.categories = {
      ...this.bookPublisherService,
      getAll: () => this.store.pipe(select(selectLibraryBookPublishers)),
      deleteItem: this.bookPublisherService.deleteItem
    };
  }
  removePublisher(id: number) {
    this.store.dispatch(removeLibraryBookPublisher({data: {id}}));
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
