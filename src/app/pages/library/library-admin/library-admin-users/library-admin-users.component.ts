import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-library-admin-users',
  templateUrl: './library-admin-users.component.html',
  styleUrls: ['./library-admin-users.component.css']
})
export class LibraryAdminUsersComponent {

  links$: Observable<LinkInterface[]> = this.linkService.libraryAdminUsersLinks;
  constructor(private linkService: LinkService) { }
}
