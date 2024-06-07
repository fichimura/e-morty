import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/characters/character/character.component';
import { NotFoundComponent } from './UI/not-found/not-found.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationComponent } from './pages/locations/location/location.component';
import { EpisodeComponent } from './pages/episodes/episode/episode.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'character',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CharactersComponent },
      { path: ':characterId', component: CharacterComponent }
    ]
  },
  {
    path: 'location',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LocationsComponent },
      { path: ':locationId', component: LocationComponent}
    ]
  },
  {
    path: 'episode',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: EpisodesComponent },
      { path: ':episodeId', component: EpisodeComponent },
    ]
  },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
