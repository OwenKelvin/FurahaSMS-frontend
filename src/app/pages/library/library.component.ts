import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  links$: Observable<LinkInterface[]> = this.linkService.libraryLinks;
  constructor(private linkService: LinkService) { }
}
