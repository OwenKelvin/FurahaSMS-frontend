import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-library-admin',
  templateUrl: './library-admin.component.html',
  styleUrls: ['./library-admin.component.css']
})
export class LibraryAdminComponent {

  links$: Observable<LinkInterface[]> = this.linkService.libraryAdminLinks;
  constructor(private linkService: LinkService) { }
}
