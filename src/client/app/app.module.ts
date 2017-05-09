import { BodyBackgroundChangerService } from './services/body-background-changer.service';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import { QuestionsService } from 'app/services/questions.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    QuestionsService,
    BodyBackgroundChangerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
