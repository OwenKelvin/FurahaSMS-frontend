import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, combineLatest } from 'rxjs';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LinkService } from '../../../services/link.service';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { filter, tap, map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup = this.fb.group({
    search: ['']
  });
  listItems$: Observable<LinkInterface[]> = this.linkService.allLinks;
  searchSubmittedSubject$ = new Subject<boolean>();
  searchSubmittedAction$ = this.searchSubmittedSubject$.asObservable();
  searchValueChanges = this.search.valueChanges.pipe(filter((search) => search.length > 0));
  componentIsActive = true;

  constructor(
    private fb: FormBuilder,
    private linkService: LinkService,
    private router: Router
  ) { }

  ngOnInit() {
    combineLatest([
      this.listItems$,
      this.searchValueChanges,
      this.searchSubmittedAction$
    ]).pipe(
      filter(([_links, _search, submitted]) => submitted),
      map(([links, search]) => links.filter(item => item.name === search)),
      tap((links) => {
        if (links.length > 0) {
          this.router.navigate([`/${links[0].link}`]);
        }
      }),
      tap(() => this.searchSubmittedSubject$.next(false)),
      tap(() => this.search.setValue('')),
      takeWhile(() => this.componentIsActive)
    ).subscribe();
  }
  get search(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }
  submitSearchForm() {
    this.searchSubmittedSubject$.next(true);
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
