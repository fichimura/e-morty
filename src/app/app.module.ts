import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { AuthService } from './pages/auth/auth.service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [
    provideClientHydration(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
