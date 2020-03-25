import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {
  author$: Observable<any>;
  componentIsActive: boolean;

  constructor(
    private libraryAuthorService: LibraryAuthorService,
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.author$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.libraryAuthorService.getAuthorWithId(id)));
  }
}
