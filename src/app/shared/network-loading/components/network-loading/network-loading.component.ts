import { Component, OnInit } from '@angular/core';
import { NetworkLoadingService } from '../../services/network-loading.service';

@Component({
  selector: 'app-network-loading',
  templateUrl: './network-loading.component.html',
  styleUrls: ['./network-loading.component.less']
})
export class NetworkLoadingComponent implements OnInit {

  isLoading$ = this.networkLoadingService.isLoadingSubject$.asObservable();

  constructor(
    private networkLoadingService: NetworkLoadingService
  ) { }

  ngOnInit(): void {
  }

}
