import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTimetableEditor]'
})
export class TimetableEditorDirective {
  @Output() hasFocus: EventEmitter<boolean> = new EventEmitter();
  element: HTMLTableCellElement;
  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }
  @HostListener('mouseenter') onMouseOver() {
    this.element.querySelector('button')?.removeAttribute('hidden');
  }
  @HostListener('mouseleave') onMouseOut() {
    this.element.querySelector('button')?.setAttribute('hidden', 'hidden');
  }
}
