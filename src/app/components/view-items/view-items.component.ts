import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() itemService: any;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  items$: Observable<any[]>;
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  deleting: boolean[] = [false];
  viewUnitCategoryCurriculum: (id: string | number) => string;
  componentIsActive = true;
  itemLoading = false;
  constructor( ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.items$ = this.itemService.getAll().pipe(
      map(res => !res ? [] : res),
      tap((res: any[]) => {
        if (res.length > 1) {
          this.itemLoading = false;
        }
      }),
      map((res: any[]) => {
        return res.map(item => {
          return { ...item, description: item.description ? item.description : 'No Description Available!' };
        });
      }));
  }
  deleteItem({ id, name, index }: { id: number, name: string, index: number; }): void {
    const deletionConfirmed = confirm(`Are you sure you wish to delete "${name}"`);
    if (deletionConfirmed) {
      this.deleting[index] = true;

      this.itemService.deleteItem(id)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe({
          next: () => {
            this.deleted.emit(id);
            this.deleting[index] = false;
          },
          error: () => {
            this.deleting[index] = false;
          },
          complete: () => {
            this.deleting[index] = false;
          }
        });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
