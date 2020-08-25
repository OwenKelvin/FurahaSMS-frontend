import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NetworkLoadingService } from '../../services/network-loading.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-network-loading',
  templateUrl: './network-loading.component.html',
  styleUrls: ['./network-loading.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkLoadingComponent {
  isLoading$ = this.networkLoadingService.isLoadingAction$.pipe(
    tap(() => this.cdRef.detectChanges())
  );
  constructor(private networkLoadingService: NetworkLoadingService, private cdRef: ChangeDetectorRef) { }

}
