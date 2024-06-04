import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'user', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'characters', component: CharactersComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
