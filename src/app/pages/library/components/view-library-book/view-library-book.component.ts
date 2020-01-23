import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryBookService } from '../../services/library-book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-library-book',
  templateUrl: './view-library-book.component.html',
  styleUrls: ['./view-library-book.component.css']
})
export class ViewLibraryBookComponent implements OnInit {

  libraryBook$: Observable<any>;
  constructor(
    private libraryBookService: LibraryBookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.libraryBook$ = this.libraryBookService.getBookWithId(+params.get('id'))
    })
    
  }

}
