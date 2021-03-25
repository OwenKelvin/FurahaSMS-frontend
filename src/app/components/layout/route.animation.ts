import {
  trigger,
  animate,
  style,
  group,
  query as q,
  transition,
  AnimationStyleMetadata, AnimationAnimateMetadata
} from '@angular/animations';
const query = (
  s: string, a: AnimationStyleMetadata | (AnimationStyleMetadata | AnimationAnimateMetadata)[], o = { optional: true }
) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),

    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1.0s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ]),
      query(':enter', [
        animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' }))
      ])
    ]),
  ]),
]);
