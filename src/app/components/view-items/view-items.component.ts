import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  @Input() deleteIemUrl: any;
  @Input() itemService: any;

  items$: Observable<any[]>;
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  viewUnitCategoryCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.items$ = this.itemService.getAll().pipe(map(res => {
      if (!res) {
        res = [];
      }
      return res.map(item => {
        return { ...item, description: item.description ? item.description : 'No Description Available!' };
      });
    }));
  }
  deleteSubjectCategory({ id, name }: { id: number, name?: string }): void {
    const deletionConfirmed = confirm(`Are you sure you wish to delete "${name}"`);
    if (deletionConfirmed) {
      this.itemService.deleteItem(id).subscribe(res => {
        this.getItems();
      });
    }
  }

}