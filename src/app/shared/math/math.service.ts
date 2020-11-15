import {Injectable} from '@angular/core';
import {Observable, Observer, ReplaySubject} from 'rxjs';

export interface MathContent {
  latex?: string;
  mathml?: string;
}

declare global {
  interface Window {
    hubReady: Observer<boolean>;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MathService {
  private readonly notifier: ReplaySubject<boolean>;

  constructor() {
    this.notifier = new ReplaySubject<boolean>();
    window.hubReady = this.notifier; // as said, bind to window object
  }

  ready(): Observable<boolean> {
    return this.notifier;
  }

  render(element: HTMLElement, math?: MathContent): void {
    if (math) {
      if (math.latex) {
        element.innerText = this.removeTrailingBrackets(math.latex);
      } else {
        element.innerHTML = this.removeTrailingBrackets(math.mathml ? math.mathml : '');
      }
    }

    MathJax?.Hub?.Queue(['Typeset', MathJax?.Hub, element]);
  }

  removeTrailingBrackets(value: string): string {
    return value.replace('>\\\(', '>').replace('\\\)<', '<');
  }
}
