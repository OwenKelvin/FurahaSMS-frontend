import { Component, OnInit } from '@angular/core';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';

@Component({
  selector: 'app-library-admin-authors',
  templateUrl: './library-admin-authors.component.html',
  styleUrls: ['./library-admin-authors.component.css']
})
export class LibraryAdminAuthorsComponent implements OnInit {
  categories: LibraryAuthorService;
  createAuthor: string;
  editAuthor: (id: string | number) => string;
  viewAuthor: (id: string | number) => string;

  constructor(private authorService: LibraryAuthorService) { }

  ngOnInit() {
    this.categories = this.authorService;
  }

}
