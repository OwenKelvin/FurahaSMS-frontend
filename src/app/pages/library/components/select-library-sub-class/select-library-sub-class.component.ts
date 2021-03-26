import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange
} from '@angular/core';
import {LibraryBookClassesService} from '../../services/library-book-classes.service';
import {of} from 'rxjs';
import {DbService} from 'src/app/services/db.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-select-library-sub-class',
  templateUrl: './select-library-sub-class.component.html',
  styleUrls: ['./select-library-sub-class.component.css']
})
export class SelectLibrarySubClassComponent implements OnInit, OnChanges, OnDestroy {
  @Input() id: any;
  @Input() classification: any;
  @Output() categoryChanged = new EventEmitter();
  selectedCategoryId: number;
  libraryBookClasses$: any;
  componentIsActive: boolean;

  constructor(
    private cdf: ChangeDetectorRef,
    private libraryBookClassesService: LibraryBookClassesService, private db: DbService) {
  }

  ngOnInit() {
    this.componentIsActive = true;
  }

  ngOnChanges(changes: { id: SimpleChange; classification: SimpleChange }) {
    let currentValue: any;
    if (changes) {
      if (changes.id) {
        currentValue = changes.id.currentValue;
      }
      if (changes.classification) {
        this.cdf.detectChanges();
      }

    }
    if (+currentValue > 0) {
      this.db.get('sub-items-' + currentValue)
        .then((doc: any) => {
          this.libraryBookClasses$ = of(doc.items);
        }).catch(() => {
        this.libraryBookClasses$ = this.libraryBookClassesService
          .getClass({classification: this.classification, libraryClass: currentValue});
        this.libraryBookClasses$
          .pipe(takeWhile(() => this.componentIsActive))
          .subscribe((items: any) => {
            const doc = {
              _id: `sub-items-${currentValue}`,
              items
            };
            if (items.length > 0) {

              this.db.put(doc).then(() => {
              }).catch(() => {
              });
            }
          });
      });
    }
  }

  emitChange() {
    this.categoryChanged.emit(this.selectedCategoryId);
  }

  emitChangePropagate($event: any) {
    this.categoryChanged.emit($event);
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
