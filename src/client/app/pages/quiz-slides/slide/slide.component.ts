import { Question } from 'app/interfaces/question.interface';
import { Component, Input, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
    trigger(
      'revealAnimation',
      [
        transition(
        ':enter', [
          style({ opacity: 0 }),
          animate('250ms', style({ opacity: 1 }))
        ]
      ),
      transition(
        ':leave', [
          style({ 'opacity': 1 }),
          animate('250ms', style({ opacity: 0 }))
        ]
      )]
    )
  ]
})
export class SlideComponent {
  @Input() question: Question;
}
