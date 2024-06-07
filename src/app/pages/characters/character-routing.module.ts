import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../auth/auth.guard";
import { CharactersComponent } from "./characters.component";
import { CharacterComponent } from "./character/character.component";

const routes: Routes = [
    {
        path: 'character',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: CharactersComponent },
          { path: ':characterId', component: CharacterComponent }
        ]
      },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class CharacterRoutingModule { }