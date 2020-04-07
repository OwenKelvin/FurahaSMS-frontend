import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddComma]'
})
export class AddCommaDirective {
  element: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }
  
  @HostListener('change') onMouseEnter() {
    let value = this.element.value.toUpperCase();
    let concatValue = 1;
    if (/\w$/.test(value)) {
    
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
      value = value.substr(0, value.length - 1)
    }
    
    this.element.value = (Number(value.replace(',', '')) * concatValue).toLocaleString()
  }
}
