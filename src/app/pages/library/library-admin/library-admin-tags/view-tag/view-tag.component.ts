import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/reducers';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-tag',
  templateUrl: './view-tag.component.html',
  styleUrls: ['./view-tag.component.css']
})
export class ViewTagComponent implements OnInit {

  tag$: Observable<any>;

  constructor(
    private libraryTagService: LibraryBookTagService,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tag$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.libraryTagService.getTagWithId(id)));
    // this.route.paramMap.subscribe(params => {
    //   this.tag$ = this.libraryTagService.getTagWithId(Number(params.get('id')));
    // });
  }

}
