import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LibraryBookService} from '../../services/library-book.service';
import {ActivatedRoute} from '@angular/router';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-view-library-book',
  templateUrl: './view-library-book.component.html',
  styleUrls: ['./view-library-book.component.css']
})
export class ViewLibraryBookComponent implements OnInit, OnDestroy {

  libraryBook$: Observable<any>;
  componentIsActive: boolean;

  constructor(
    private libraryBookService: LibraryBookService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(params => {
        this.libraryBook$ = this.libraryBookService.getBookWithId(Number(params.get('id')));
      });

  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
