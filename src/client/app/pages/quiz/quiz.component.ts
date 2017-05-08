import { GroupByPipe } from './../../pipes/group-by/group-by.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public questions = [];
  public questionGroups;
  public questionGroupsKeys: Array<string>;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      let category = Math.floor(i / 6);
      this.questions.push({
        category: 'cat' + category,
        questionId: i % 6 + 1
      });
    }
    this.questionGroups = new GroupByPipe().transform(this.questions, 'category');
    this.questionGroupsKeys = Object.keys(this.questionGroups);
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
    return 'calc(' + (100 / this.numRows).toString() + '% - 32px)';
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
