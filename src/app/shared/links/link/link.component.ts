import { Component, Input } from '@angular/core';
import { LinkInterface } from '../../../interfaces/link.interface';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() link: LinkInterface;
}
