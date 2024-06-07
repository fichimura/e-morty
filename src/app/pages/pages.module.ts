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
        UIModule
    ],
})

export class PagesModule{ }