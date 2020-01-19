import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { BookPublisherService } from '../../../services/book-publisher.service';
import { VIEW_LIBRARY_PUBLISHER, EDIT_LIBRARY_PUBLISHER, CREATE_LIBRARY_PUBLISHER } from '../../../helpers/links.helpers';

@Component({
  selector: 'app-library-admin-publishers',
  templateUrl: './library-admin-publishers.component.html',
  styleUrls: ['./library-admin-publishers.component.css']
})
export class LibraryAdminPublishersComponent implements OnInit {
  createPublisher: string;
  editPublisher: (id: string | number) => string;
  viewPublisher: (id: string | number) => string;
  categories: BookPublisherService;

  constructor(private store: Store<fromStore.AppState>, private bookPublisherService: BookPublisherService) { }

  ngOnInit() {
    this.createPublisher = CREATE_LIBRARY_PUBLISHER;
    this.editPublisher = EDIT_LIBRARY_PUBLISHER;
    this.viewPublisher = VIEW_LIBRARY_PUBLISHER;
    this.categories = this.bookPublisherService;
  }

}
