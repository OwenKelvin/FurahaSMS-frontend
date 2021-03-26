import {Component, OnInit, TemplateRef, forwardRef, Output, EventEmitter} from '@angular/core';

import Quagga from 'quagga';
import {validateISBN} from 'src/app/pages/library/validatots/isbn.validator';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BarcodeComponent),
      multi: true
    },
  ]
})
export class BarcodeComponent implements OnInit, ControlValueAccessor {
  @Output() private valueChange = new EventEmitter();
  showOpenScannerButton = false;
  scannerIsRunning: boolean;
  modalRef: BsModalRef;
  attempt: any;
  onTouched: any;
  onChanges: ($value: any) => void;

  constructor(
    private modalService: BsModalService,
  ) {
  }

  writeValue(obj: any): void {
    this.attempt = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      this.showOpenScannerButton = true;
    }
  }

  startScanner() {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#scanner-container'),
        constraints: {
          width: 750,
          height: 400,
          facingMode: 'environment'
        },
      },
      decoder: {
        readers: [
          'code_128_reader',
          'ean_reader',
          'ean_8_reader',
          'code_39_reader',
          'code_39_vin_reader',
          'codabar_reader',
          'upc_reader',
          'upc_e_reader',
          'i2of5_reader'
        ],
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true
          }
        }
      },

    }, (err: any) => {
      if (err) {
        return;
      }

      console.log('Initialization finished. Ready to start');
      Quagga.start();

      // Set flag to is running
      this.scannerIsRunning = true;
    });

    Quagga.onProcessed((result: any) => {
      const drawingCtx = Quagga.canvas.ctx.overlay;
      const drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
          result.boxes.filter((box: any) => box !== result.box).forEach((box: any) => {
            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2});
          });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2});
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
        }
      }
    });
    Quagga.onDetected((result: any) => {

      const c = new FormControl();
      c.setValue(result.codeResult.code);
      this.attempt = result.codeResult.code;
      if (!validateISBN(c)) {
        this.onChanges(this.attempt);
        this.valueChange.emit(this.attempt);
        Quagga.stop();
        this.modalRef.hide();

      }
    });
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');

    if (this.showOpenScannerButton) {
      this.startScanner();
    }
  }

  closeModal() {
    this.modalRef.hide();
    Quagga.stop();
  }

}
