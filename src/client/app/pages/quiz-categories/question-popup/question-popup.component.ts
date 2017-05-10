import { Question } from 'app/interfaces/question.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss']
})
export class QuestionPopupComponent {
  @Input() question: Question;
  @Output() closeQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  public exitQuestion(event: MouseEvent): void {
    this.closeQuestion.emit(this.question);
  }
}
