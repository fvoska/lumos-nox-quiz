import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';

import { routing } from './video.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [VideoComponent]
})
export class VideoModule { }
