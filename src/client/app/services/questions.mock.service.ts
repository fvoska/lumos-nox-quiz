import { Injectable } from '@angular/core';

import { Question } from 'app/interfaces/question.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsMockService {
  public getJeopardyQuestions(numQuestions: number = 30, numCategories: number = 6): Observable<Array<Question>> {
    let questions: Array<Question> = [];

    for (let i: number = 0; i < numQuestions; i++) {
      let category: number = Math.floor(i % numCategories);
      questions.push({
        id: i.toString(),
        label: ((Math.floor(i / numCategories) + 1) * 100).toString(),
        category: (category + 1).toString(),
        text: 'Question ' + i,
        done: false
      });
    }
    return Observable.of(questions);
  }
}
