import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    FieldErrorsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
