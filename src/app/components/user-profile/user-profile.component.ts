import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() profile: any;
  @Input() linkBase: any[];
  @Input() links: any[];
  @Input() includeProfileId: boolean = true;

  ngOnInit() {
  }
  get fullName(): string {
    return this.profile.firstName + ' ' + this.profile.lastName
      + (this.profile.middleName ? (' ' + this.profile.middleName) : '')
      + (this.profile.otherNames ? (' ' + this.profile.otherNames) : '')
      + (this.profile.userId ? (' ' + this.profile.userId) : '');
  }
  fullLink(link: string) {
    if (this.includeProfileId) {
      return [...this.linkBase, this.profile.id, link];
    }
    return [...this.linkBase, link];
  }
}
