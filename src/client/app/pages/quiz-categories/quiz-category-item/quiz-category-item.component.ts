import { Question } from 'app/interfaces/question.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'quiz-category-item',
  templateUrl: './quiz-category-item.component.html',
  styleUrls: ['./quiz-category-item.component.scss']
})
export class QuizCategoryItemComponent {
  @Input() question: Question;
  @Output() openQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  public onClicked(): void {
    this.openQuestion.emit(this.question);
  }
}
