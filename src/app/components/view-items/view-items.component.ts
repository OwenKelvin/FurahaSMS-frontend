import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() newItemUrl: string;
  @Input() editItemUrl: any;
  @Input() viewItemUrl: any;
  @Input() itemService: any;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  items$: Observable<any[]>;
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  deleting: boolean[];
  viewUnitCategoryCurriculum: (id: string | number) => string;
  componentIsActive: any;
  itemLoading: boolean;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.itemLoading = false;
    this.componentIsActive = true;
    this.getItems();
    this.deleting = [false];
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
            this.store.dispatch(loadToastShowsSuccess({
              showMessage: true,
              toastHeader: 'Success',
              toastTime: 'Just now',
              toastBody: `Successfully deleted "${name}"`
            }));
          },
          error: (error: any) => {

            this.store.dispatch(loadErrorMessagesSuccess({
              body: error.help,
              show: true,
              title: error.message,
              status: error.status
            }));
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
