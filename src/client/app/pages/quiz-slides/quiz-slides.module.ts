import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizSlidesComponent } from './quiz-slides.component';

import { routing } from './quiz-slides.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    QuizSlidesComponent
  ]
})
export class QuizSlidesModule { }
