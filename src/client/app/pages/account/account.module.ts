import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './account.routes';

import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
