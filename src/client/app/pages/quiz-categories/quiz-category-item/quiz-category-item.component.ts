import { Question } from 'app/interfaces/question.interface';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quiz-category-item',
  templateUrl: './quiz-category-item.component.html',
  styleUrls: ['./quiz-category-item.component.scss']
})
export class QuizCategoryItemComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
