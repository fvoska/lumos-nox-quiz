import { PipesModule } from 'app/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';
import { routing } from './quiz.routes';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    routing
  ],
  declarations: [QuizComponent]
})
export class QuizModule { }
