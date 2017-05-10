import { Injectable } from '@angular/core';

import { Question } from 'app/interfaces/question.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {
  constructor(private http: Http) {}
  public getJeopardyQuestions(numQuestions: number = 30, numCategories: number = 6): Observable<Array<Question>> {
    return this.http.get('assets/questions.jeopardy.json').map((res: Response) => res.json().questions);
  }
}
