import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { Observable } from 'rxjs';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent implements OnInit {

  publisher$: Observable<any> | undefined;

  constructor(
    private libraryPublisherService: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {



    this.publisher$ = this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.libraryPublisherService.getPublisherWithId(id)))
  }

}
