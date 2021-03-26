import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {MathContent, MathService} from './math.service';
import {take, takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../mixins/subscribed-container.mixin';

@Directive({
  selector: '[appMath]'
})
export class MathDirective extends subscribedContainerMixin() implements OnInit {

  @Input()
  private appMath: MathContent;
  private readonly elNativeElement: HTMLElement;

  constructor(private service: MathService, private el: ElementRef) {
    super();
    this.elNativeElement = el.nativeElement as HTMLElement;
  }

  ngOnInit(): void {
    this.service.ready().pipe(
      take(1),
      takeUntil(this.destroyed$)
    ).subscribe(_res => {
      this.service.render(this.elNativeElement, this.appMath);
    });
  }
}
