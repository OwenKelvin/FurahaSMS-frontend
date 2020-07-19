import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {

  @Output() toggleType: EventEmitter<string> = new EventEmitter();

  element: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('touchstart') onTouchStart() {
    this.toggleType.emit('text');
  }

  @HostListener('touchend') onTouchEnd() {
    this.toggleType.emit('password');
  }
  @HostListener('mousedown') onMouseDown() {
    this.toggleType.emit('text');
  }
  @HostListener('mouseup') onMouseUp() {
    this.toggleType.emit('password');
  }
  @HostListener('keypress', ['$event']) onEnterKeyPress($event: KeyboardEvent) {
    if ($event.key === 'Enter' || $event.which === 13 || $event.keyCode === 13) {
      this.toggleType.emit('text');
    }
  }
  @HostListener('keyup', ['$event']) onEnterKeyUp($event: KeyboardEvent) {
    if ($event.key === 'Enter' || $event.which === 13 || $event.keyCode === 13) {
      this.toggleType.emit('password');
    }
  }
}
