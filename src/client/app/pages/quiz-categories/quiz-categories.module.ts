import { PipesModule } from 'app/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizCategoriesComponent } from './quiz-categories.component';
import { QuizCategoryItemModule } from './quiz-category-item/quiz-category-item.module';

import { routing } from './quiz-categories.routes';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    QuizCategoryItemModule,
    routing
  ],
  declarations: [
    QuizCategoriesComponent
  ]
})
export class QuizCategoriesModule { }