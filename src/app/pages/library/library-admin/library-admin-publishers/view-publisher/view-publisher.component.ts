import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from 'src/app/store/reducers';
import { Observable, of } from 'rxjs';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';
import { CanvasService } from 'src/app/services/canvas.service';
import { selectLibraryBookPublisher } from '../../../store/selectors/library.selectors';

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent implements OnInit, AfterViewInit {

  publisher$: Observable<any> | undefined;
  profPicLoading: boolean;
  componentIsActive: boolean;
  profPic: HTMLCanvasElement;
  profilePicId: number;
  showPlaceholderImage: boolean;

  constructor(
    private libraryPublisherService: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
    private canvasService: CanvasService

  ) { }
  ngAfterViewInit() {
    this.placeholderImage();
    this.getProfilePic();

  }
  placeholderImage() {
    const img = document.querySelector('#placeholder');
    const ctx = (document.querySelector('#profPicCanvas') as HTMLCanvasElement);
    if (ctx && img) {
      this.canvasService.fitImageOn(ctx, img);
      this.showPlaceholderImage = false;
    } else {
      this.showPlaceholderImage = true;
    }
  }
  ngOnInit() {
    this.componentIsActive = true;
    this.publisher$ = this.route.parent?.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        tap(id => this.libraryPublisherService.loadItem(id)),
        mergeMap(id => this.store.pipe(select(selectLibraryBookPublisher(id)))),
        tap(publisher => {
          if (publisher) {
            this.profilePicId = publisher.profile_pic_id;
            this.getProfilePic();
          }
        }),
      );
  }

  getProfilePic() {
    this.profPicLoading = true;
    this.canvasService.getProfilePicture({ fileId: this.profilePicId })
      .pipe(takeWhile(() => this.componentIsActive && Number(this.profilePicId) !== 0))
      .subscribe({
        next: res => {
          const imageObj = new Image();
          imageObj.src = URL.createObjectURL(res);
          imageObj.onload = () => {
            this.showPlaceholderImage = false;
            this.canvasService.fitImageOn(document.querySelector('#profPicCanvas') as HTMLCanvasElement, imageObj);
          };

        },
        complete: () => this.profPicLoading = false
      });
  }

}
