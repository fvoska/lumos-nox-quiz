import { trigger, state, animate, style, transition } from '@angular/animations';

export function routerTransition() {
  return fade();
}

function fade(): any {
  return trigger('routerTransition', [
    state('void', style({position: 'absolute', width: '100vw', height: '90vh'}) ),
    state('*', style({position: 'absolute', width: '100vw', height: '90vh'}) ),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.25s ease-in-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('0.25s ease-in-out', style({ opacity: 0 }))
    ])
  ]);
}

function slide() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}
