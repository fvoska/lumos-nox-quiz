import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { QuizComponent } from './quiz.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
