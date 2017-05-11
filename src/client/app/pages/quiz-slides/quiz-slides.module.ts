import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizSlidesComponent } from './quiz-slides.component';

import { routing } from './quiz-slides.routes';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    QuizSlidesComponent,
    SlideComponent
  ]
})
export class QuizSlidesModule { }
