import { Question } from 'app/interfaces/question.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'quiz-category-item',
  templateUrl: './quiz-category-item.component.html',
  styleUrls: ['./quiz-category-item.component.scss']
})
export class QuizCategoryItemComponent {
  @Input() question: Question;
  @Output() openQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  public onClicked(event: MouseEvent): void {
    if (!event.altKey) {
      this.openQuestion.emit(this.question);
    }
  }
}
