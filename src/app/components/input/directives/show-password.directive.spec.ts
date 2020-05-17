import { ShowPasswordDirective } from './show-password.directive';
import { ElementRef } from '@angular/core';

describe('ShowPasswordDirective', () => {
  const elementRef: ElementRef = {
    nativeElement: {}
  };
  it('should create an instance', () => {
    const directive = new ShowPasswordDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
