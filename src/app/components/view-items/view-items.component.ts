import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { loadingMixin } from 'src/app/shared/mixins/loading.mixin';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent extends loadingMixin() implements OnInit {
  @Input() title: string;
  @Input() itemService: any;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  items$: Observable<any[]>;
  deleting: boolean[] = [false];
  itemLoading = false;
  constructor() { super(); }

  ngOnInit() {
    this.items$ = this.itemService.all$.pipe(
      map(res => !res ? [] : res),
      tap((res: any[]) => {
        if (res.length > 1) {
          this.itemLoading = false;
        }
      }));
  }

  deleteItem({ id, name, index }: { id: number; name: string; index: number }): void {
    const deletionConfirmed = confirm(`Are you sure you wish to delete "${name}"`);
    if (deletionConfirmed) {
      this.deleting[index] = true;

      this.itemService.deleteItem(id)
        .subscribe({
          next: () => {
            this.deleted.emit(id);
            this.deleting[index] = false;
          },

          complete: () => {
            this.deleting[index] = false;
          }
        });
    }
  }
}
