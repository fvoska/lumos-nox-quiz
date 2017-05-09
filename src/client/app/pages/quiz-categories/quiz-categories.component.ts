import { BodyBackgroundChangerService } from './../../services/body-background-changer.service';
import { Component, OnInit } from '@angular/core';

import { Question } from 'app/interfaces/question.interface';
import { GroupByPipe } from 'app/pipes/group-by/group-by.pipe';
import { QuestionsService } from 'app/services/questions.service';

@Component({
  selector: 'quiz-categories',
  templateUrl: './quiz-categories.component.html',
  styleUrls: ['./quiz-categories.component.scss']
})
export class QuizCategoriesComponent implements OnInit {
  public questions: Array<Question> = [];
  public questionGroups;
  public questionGroupsKeys: Array<string>;

  constructor(private questionsService: QuestionsService, private backgroundChanger: BodyBackgroundChangerService) { }

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
    this.questionGroups = new GroupByPipe().transform(this.questions, 'category');
    this.questionGroupsKeys = Object.keys(this.questionGroups);
    this.backgroundChanger.changeBackground('pergament');
  }

  public calculateColumns(): string {
    const fractions: Array<string> = [];
    for (let i: number = 0; i < this.questionGroupsKeys.length; i++) {
      fractions.push('1fr');
    }
    return fractions.join(' ');
  }

  public calculateHeigth(): string {
    console.log(this.numRows);
    return 'calc(' + (100 / this.numRows).toString() + '% - 40px)';
  }

  public get numRows(): number {
    let maxQuestionsInGroup = 1;
    this.questionGroupsKeys.forEach((group) => {
      if (this.questionGroups[group].length > maxQuestionsInGroup) {
        maxQuestionsInGroup = this.questionGroups[group].length;
      }
    });
    return maxQuestionsInGroup;
  }
}
