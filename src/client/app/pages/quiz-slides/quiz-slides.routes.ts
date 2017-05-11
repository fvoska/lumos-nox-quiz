import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';
import { QuizSlidesComponent } from './quiz-slides.component';

const routes: Routes = [
  { path: '', component: QuizSlidesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
