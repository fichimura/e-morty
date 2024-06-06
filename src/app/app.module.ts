import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { environment } from '../environments/environment';
import { CharactersComponent } from './pages/characters/characters.component';
import { FetchApiService } from './services/fetchApi.service';
import { CharacterComponent } from './pages/characters/character/character.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchBoxComponent } from './UI/search-box/search-box.component';
import { ListingSubjectsComponent } from './UI/listing-subjects/listing-subjects.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/locations/location/location.component';
import { ReturnComponent } from './UI/return/return.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { EpisodeComponent } from './pages/episodes/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    UserProfileComponent,
    CharactersComponent,
    CharacterComponent,
    NotFoundComponent,
    SearchBoxComponent,
    ListingSubjectsComponent,
    LocationsComponent,
    LocationComponent,
    ReturnComponent,
    EpisodesComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    provideClientHydration(),
    AuthService,
    FetchApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
