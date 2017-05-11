import { KeyCodes } from 'app/enums/keycodes.enum';
import { Component, OnInit, HostListener } from '@angular/core';

import { BodyBackgroundChangerService } from 'app/services/body-background-changer.service';
import { Question } from 'app/interfaces/question.interface';
import { QuestionsService } from 'app/services/questions.service';

@Component({
  selector: 'quiz-slides',
  templateUrl: './quiz-slides.component.html',
  styleUrls: ['./quiz-slides.component.scss']
})
export class QuizSlidesComponent implements OnInit {
  public question: Question = null;
  public questions: Array<Question> = [];

  private currentQuestion: number = -1;

  constructor(private questionsService: QuestionsService, private backgroundChanger: BodyBackgroundChangerService) { }

  ngOnInit(): void {
    this.questionsService.getSlidesQuestions().subscribe((questions: Array<Question>) => {
      this.questions = questions;
    });
    this.backgroundChanger.changeBackground('pergament');
    this.backgroundChanger.changeBackground('stars');
  }

  public prevQuestion(): void {
    const nextQuestion = Math.max(this.currentQuestion - 1, -1);
    this.changeQuestion(nextQuestion);
  }

  public nextQuestion(): void {
    const nextQuestion = Math.min(this.currentQuestion + 1, this.questions.length);
    this.changeQuestion(nextQuestion);
  }

  @HostListener('document:keydown', ['$event'])
  // tslint:disable-next-line:no-unused-variable
  private listQuestions(ev: KeyboardEvent): void {
    let nextQuestion: number = -1;
    if (ev.keyCode === KeyCodes.ARROW_LEFT) {
      nextQuestion = Math.max(this.currentQuestion - 1, -1);
    } else if (ev.keyCode === KeyCodes.ARROW_RIGHT) {
      nextQuestion = Math.min(this.currentQuestion + 1, this.questions.length);
    }
    this.changeQuestion(nextQuestion);
  }

  private changeQuestion(questionNumber: number): void {
    if (this.question === null) {
      if (questionNumber < 0) {
        this.currentQuestion = -1;
        this.question = null;
      } else if (questionNumber >= this.questions.length) {
        this.currentQuestion = this.questions.length;
        this.question = null;
      } else {
        this.currentQuestion = questionNumber;
        this.question = this.questions[questionNumber];
      }
    } else {
      this.question = null;
    }
  }
}
