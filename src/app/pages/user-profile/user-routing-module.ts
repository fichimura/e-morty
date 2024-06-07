import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../auth/auth.guard";
import { UserProfileComponent } from "./user-profile.component";

const routes: Routes = [
    {
        path: 'user',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class UserRoutingModule { }