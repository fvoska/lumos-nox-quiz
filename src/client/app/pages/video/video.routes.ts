import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';
import { VideoComponent } from './video.component';

const routes: Routes = [
  { path: '', component: VideoComponent },
  { path: ':video', component: VideoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
