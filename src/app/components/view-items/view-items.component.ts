import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  @Input() title: string;
  @Input() newItemUrl: string;
  @Input() editItemUrl: any;
  @Input() viewItemUrl: any;
  @Input() itemService: any;

  items$: Observable<any[]>;
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  deleting: boolean[];
  viewUnitCategoryCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.getItems();
    this.deleting = [false];
  }
  getItems(): void {
    this.items$ = this.itemService.getAll().pipe(map(res => {
      console.log(res)
      if (!res) {
        res = [];
      }
      return (res as Array<any>).map(item => {
        return { ...item, description: item.description ? item.description : 'No Description Available!' };
      });
    }));
  }
  deleteItem({ id, name, index }: { id: number, name?: string, index?: number }): void {
    const deletionConfirmed = confirm(`Are you sure you wish to delete "${name}"`);
    if (deletionConfirmed) {
      this.deleting[index] = true;
      this.itemService.deleteItem(id).subscribe(res => {
        this.getItems();
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastHeader: 'Success',
          toastTime: 'Just now',
          toastBody: `Successfully deleted "${name}"`
        }));
        this.deleting[index] = false;
      }, error => {
          this.deleting[index] = false;
          this.store.dispatch(loadErrorMessagesSuccess({
            body: error.help,
            show: true,
            title: error.message,
            status: error.status
          }));
      });
    }
  }

}
