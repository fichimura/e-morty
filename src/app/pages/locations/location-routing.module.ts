import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../auth/auth.guard";
import { LocationsComponent } from "./locations.component";
import { LocationComponent } from "./location/location.component";

const routes: Routes = [
    {
        path: 'location',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: LocationsComponent },
          { path: ':locationId', component: LocationComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class LocationRoutingModule { }