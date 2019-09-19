import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService, UserService } from './_services';
import { AuthGuard } from './_guards';
// import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,  
    LoginComponent,    
    SignupComponent,
    
  ],
  // AuthComponent
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
