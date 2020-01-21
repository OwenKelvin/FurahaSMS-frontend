import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { LibraryBookClassesService } from '../../services/library-book-classes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-library-class',
  templateUrl: './select-library-class.component.html',
  styleUrls: ['./select-library-class.component.css']
})
export class SelectLibraryClassComponent implements OnInit, OnChanges {
  libraryBookClassValue: any;
  @Input() classification;
  libraryBookClasses$: Observable<any>;
  constructor(
    private libraryBookClassesService: LibraryBookClassesService
  ) { }

  ngOnInit() {
  }
  ngOnChanges(changes: { classification: SimpleChange; }) {
    const { currentValue } = changes.classification;
    if (currentValue > 0) {
      this.libraryBookClasses$ = this.libraryBookClassesService.getClass({ classification: currentValue, libraryClass: null });
      
    }
  }

}
