import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { LibraryBookClassesService } from '../../services/library-book-classes.service';

@Component({
  selector: 'app-select-library-sub-class',
  templateUrl: './select-library-sub-class.component.html',
  styleUrls: ['./select-library-sub-class.component.css']
})
export class SelectLibrarySubClassComponent implements OnInit, OnChanges {
  @Input() id;
  @Input() classification;
  selectedCategoryId: number;
  libraryBookClasses$: any;
  constructor(private libraryBookClassesService: LibraryBookClassesService) { }

  ngOnInit() {
    // library_class
  }
  ngOnChanges(changes: { id: SimpleChange; }) {
    const { currentValue } = changes.id;
    if (currentValue > 0) {
      this.libraryBookClasses$ = this.libraryBookClassesService
        .getClass({ classification: this.classification, libraryClass: currentValue });

    }
  }

}
