import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddComma]'
})
export class AddCommaDirective {
  element: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('change') onMouseEnter() {
    const initialValue = this.element.value;
    let value = initialValue.toUpperCase();
    let concatValue = 1;
    if (/[A-Z]$/.test(value)) {

      switch (value[value.length - 1]) {
       case 'K':
          concatValue = 1000;
         break;
       case 'L':
          concatValue = 100000;
         break;
       case 'M':
          concatValue = 1000000;
         break;
       case 'B':
          concatValue = 1000000000;
         break;

       default:
         break;
      }
      value = value.substr(0, value.length - 1);
    }

    if (isNaN(Number(value.replace(/,/g, '')))) {
      this.element.value = initialValue;
    } else {
      this.element.value = (Number(value.replace(/,/g, '')) * concatValue).toLocaleString();
    }

  }
}
