import { Component, OnInit } from '@angular/core';
import { LibraryBookTagService } from '../../services/library-book-tag.service';

@Component({
  selector: 'app-library-admin-tags',
  templateUrl: './library-admin-tags.component.html',
  styleUrls: ['./library-admin-tags.component.css']
})
export class LibraryAdminTagsComponent implements OnInit {
  categories: any;
  createTag: string;
  editTag: (id: string | number) => string;
  viewTag: (id: string | number) => string;

  constructor(private libraryBookTagService: LibraryBookTagService) { }

  ngOnInit() {
    this.categories = this.libraryBookTagService;
  }

}
