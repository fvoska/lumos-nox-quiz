import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';

import { Question } from 'app/interfaces/question.interface';
import { GroupByPipe } from 'app/pipes/group-by/group-by.pipe';
import { QuestionsService } from 'app/services/questions.service';
import { BodyBackgroundChangerService } from 'app/services/body-background-changer.service';

@Component({
  selector: 'quiz-categories',
  templateUrl: './quiz-categories.component.html',
  styleUrls: ['./quiz-categories.component.scss'],
  animations: [
    trigger(
      'popupAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateY(0)', 'opacity': 1}),
          animate('250ms', style({transform: 'translateY(100%)', opacity: 0}))
        ]
      )]
    )
  ]
})
export class QuizCategoriesComponent implements OnInit {
  public questions: Array<Question> = [];
  public questionGroups: any;
  public questionGroupsKeys: Array<string>;
  public showQuestion: Question = null;
  private currentImageShown: number = 0;

  constructor(private questionsService: QuestionsService, private backgroundChanger: BodyBackgroundChangerService) { }

  ngOnInit(): void {
    this.questionsService.getJeopardyQuestions().subscribe((questions: Array<Question>) => {
      this.questions = questions;
      this.questionGroups = new GroupByPipe().transform(this.questions, 'category');
      this.questionGroupsKeys = Object.keys(this.questionGroups);
    });
    this.backgroundChanger.changeBackground('pergament');
    document.onkeydown = (ev: KeyboardEvent) => {
      if (ev.keyCode === 37) {
        if (this.currentImageShown > 0) {
          this.showImage(this.currentImageShown - 1);
        }
      } else if (ev.keyCode === 39) {
        if (this.currentImageShown <= this.questionGroupsKeys.length) {
          this.showImage(this.currentImageShown + 1);
        }
      } else if (ev.keyCode - 48 >= 0 && ev.keyCode - 48 <= Math.min(this.questionGroupsKeys.length, 9)) {
        if (ev.keyCode - 48 === this.currentImageShown) {
          this.showImage(0);
        } else {
          this.showImage(ev.keyCode - 48);
        }
      }
    };
  }

  public showImage(imgToShow: number): void {
    for (let i: number = 1; i <= this.questionGroupsKeys.length; i++) {
      document.getElementById('img-' + i).classList.remove('img-hover');
    }
    if (imgToShow > 0 && imgToShow <= this.questionGroupsKeys.length) {
      document.getElementById('img-' + imgToShow).classList.add('img-hover');
      this.currentImageShown = imgToShow;
    } else if (imgToShow === 0 || imgToShow === this.questionGroupsKeys.length + 1) {
      this.currentImageShown = imgToShow;
    } else {
      this.currentImageShown = 0;
    }
  }

  public calculateColumns(): string {
    if (!this.questions || !this.questionGroupsKeys) {
      return '0px';
    }
    const fractions: Array<string> = [];
    for (let i: number = 0; i < this.questionGroupsKeys.length; i++) {
      fractions.push('1fr');
    }
    return fractions.join(' ');
  }

  public calculateHeigth(): string {
    return 'calc(' + (100 / this.numRows).toString() + '% - 20px)';
  }

  public openQuestion(question: Question): void {
    if (!question.done) {
      this.showQuestion = question;
    }
  }

  public altClick(event: MouseEvent, question: Question): void {
    if (event.altKey) {
      this.toggleQuestion(question);
    } else {
      return event.preventDefault();
    }
  }

  public toggleQuestion(question: Question): void {
    const $question: HTMLElement = document.getElementById('q' + question.id);
    $question.classList.toggle('question-answered');
    question.done = $question.classList.contains('question-answered');
  }

  public onQuestionClose(question: Question): void {
    this.showQuestion = null;
    this.toggleQuestion(question);
  }

  public get numRows(): number {
    let maxQuestionsInGroup: number = 1;
    this.questionGroupsKeys.forEach((group: string) => {
      if (this.questionGroups[group].length > maxQuestionsInGroup) {
        maxQuestionsInGroup = this.questionGroups[group].length;
      }
    });
    return maxQuestionsInGroup;
  }
}
