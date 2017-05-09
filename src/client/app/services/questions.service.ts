import { Injectable } from '@angular/core';

import { Question } from 'app/interfaces/question.interface';

@Injectable()
export class QuestionsService {
  public getQuestions(numQuestions: number = 30, numCategories: number = 6): Array<Question> {
    let questions: Array<Question> = [];

    for (let i: number = 0; i < numQuestions; i++) {
      let category: number = Math.floor(i % numCategories);
      questions.push({
        id: (Math.floor(i / numCategories) + 1).toString(),
        category: 'cat' + (category + 1)
      });
    }
    return questions;
  }
}