import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NetworkLoadingService } from '../../services/network-loading.service';

@Component({
  selector: 'app-network-loading',
  templateUrl: './network-loading.component.html',
  styleUrls: ['./network-loading.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkLoadingComponent {
  isLoading$ = this.networkLoadingService.isLoadingAction$;
  constructor(private networkLoadingService: NetworkLoadingService) { }
  
}
