import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../../store/reducers';
import { LibraryAuthorService } from 'src/app/services/library-author.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {
  author$: Observable<any>;

  constructor(
    private libraryAuthorService: LibraryAuthorService,
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.author$ = this.libraryAuthorService.getAuthorWithId(+params.get('id'))
    })
  }

}
