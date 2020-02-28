import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.css']
})
export class AccountsAdminComponent implements OnInit {
  links$: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.links$ = of([
      { name: 'Financial Costs', icon: 'icon-dollar', link: 'accounts/admin/financial-costs' },
    ]);
  }

}
