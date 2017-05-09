import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { QuizCategoriesComponent } from './quiz-categories.component';

const routes: Routes = [
  { path: '', component: QuizCategoriesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
