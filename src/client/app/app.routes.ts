import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz-categories', loadChildren: './pages/quiz-categories/quiz-categories.module#QuizCategoriesModule' },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
