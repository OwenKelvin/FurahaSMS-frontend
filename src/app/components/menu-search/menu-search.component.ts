import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LinkService } from './../../services/link.service';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit, OnDestroy {
  listItems$: Observable<LinkInterface[]>;
  listItems: LinkInterface[];
  searchForm: FormGroup;
  componentIsActive: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private linkService: LinkService,
    private router: Router
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.listItems$ = this.linkService.getAllLinks()
      .pipe(takeWhile(() => this.componentIsActive));
    this.listItems$.subscribe(items => (this.listItems = items));
  }
  get search(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }
  submitSearchForm() {
    const matched = this.listItems.filter(item => item.name === this.search.value);
    this.search.setValue('');
    if (matched.length > 0) {
      this.router.navigate([`/${matched[0].link}`]);
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
