import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toastHeader: string;
  toastBody: string;
  toastTime: string;
  constructor() { }

  ngOnInit() {
    this.toastHeader = 'Success';
    this.toastBody = 'Successfull!';
  }

}
