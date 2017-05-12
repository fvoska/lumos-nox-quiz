import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jeopardy', loadChildren: './pages/quiz-categories/quiz-categories.module#QuizCategoriesModule' },
  { path: 'slides', loadChildren: './pages/quiz-slides/quiz-slides.module#QuizSlidesModule' },
  { path: 'video', loadChildren: './pages/video/video.module#VideoModule' },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
