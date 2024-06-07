import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharacterComponent } from "./characters/character/character.component";
import { CharactersComponent } from "./characters/characters.component";
import { LocationsComponent } from "./locations/locations.component";
import { LocationComponent } from "./locations/location/location.component";
import { EpisodesComponent } from "./episodes/episodes.component";
import { EpisodeComponent } from "./episodes/episode/episode.component";
import { HomeComponent } from "./home/home.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UIModule } from "../UI/ui.module";
import { CharacterRoutingModule } from "./characters/character-routing.module";
import { EpisodeRoutingModule } from "./episodes/episode-routing.module";
import { LocationRoutingModule } from "./locations/location-routing.module";
import { HomeRoutingModule } from "./home/home-routing.module";
import { UserRoutingModule } from "./user-profile/user-routing-module";

@NgModule({
    declarations: [
        HomeComponent,
        UserProfileComponent,
        CharactersComponent,
        CharacterComponent,
        LocationsComponent,
        LocationComponent,
        EpisodesComponent,
        EpisodeComponent
    ],
    imports: [
        CommonModule,
        UIModule,
        HomeRoutingModule,
        UserRoutingModule,
        CharacterRoutingModule,
        EpisodeRoutingModule,
        LocationRoutingModule,
    ],
})

export class PagesModule{ }