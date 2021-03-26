import { Component, OnInit } from '@angular/core';
import { LibraryPublisherService } from '../../../services/library-publisher.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-library-admin-publisher-item',
  templateUrl: './library-admin-publisher-item.component.html',
  styleUrls: ['./library-admin-publisher-item.component.css']
})
export class LibraryAdminPublisherItemComponent implements OnInit {

  constructor(
    private libraryPublisherService: LibraryPublisherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        mergeMap(id => this.libraryPublisherService.loadItem(id))
      )
      .subscribe();

  }

}
