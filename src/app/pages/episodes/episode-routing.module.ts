import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../auth/auth.guard";
import { EpisodesComponent } from "./episodes.component";
import { EpisodeComponent } from "./episode/episode.component";

const routes: Routes = [
    {
        path: 'episode',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: EpisodesComponent },
          { path: ':episodeId', component: EpisodeComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class EpisodeRoutingModule { }