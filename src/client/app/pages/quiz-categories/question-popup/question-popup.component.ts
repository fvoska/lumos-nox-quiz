import { Question } from 'app/interfaces/question.interface';
import { Component, Input, EventEmitter, Output, OnInit, trigger, transition, style, animate, HostListener } from '@angular/core';
import { KeyCodes } from "app/enums/keycodes.enum";

@Component({
  selector: 'question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss'],
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
export class QuestionPopupComponent {
  @Input() question: Question;
  @Output() closeQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  public showAnswer: boolean = false;

  public exitQuestion(event: MouseEvent): void {
    this.closeQuestion.emit(this.question);
  }

  @HostListener('document:keyup', ['$event'])
  // tslint:disable-next-line:no-unused-variable
  private toggleAnswer(ev: KeyboardEvent): void {
    if (ev.keyCode === KeyCodes.A) {
      this.showAnswer = !this.showAnswer;
    } else if (ev.keyCode === KeyCodes.ESC) {
      this.exitQuestion(null);
    }
  }
}
