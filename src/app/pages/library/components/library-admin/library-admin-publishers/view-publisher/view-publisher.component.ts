import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../../store/reducers';
import { Observable } from 'rxjs';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent implements OnInit {

  publisher$: Observable<any>;

  constructor(
    private libraryPublisherService: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.publisher$ = this.libraryPublisherService.getPublisherWithId(+params.get('id'));
    });
  }

}
