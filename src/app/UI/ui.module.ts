import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { NavbarComponent } from "./navbar/navbar.component";
import { ErrorHandlingComponent } from "./error-handling/error-handling.component";
import { ListingSubjectsComponent } from "./listing-subjects/listing-subjects.component";
import { LoadingComponent } from "./loading/loading.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReturnComponent } from "./return/return.component";
import { SearchBoxComponent } from "./search-box/search-box.component";

@NgModule({
    declarations: [
        ErrorHandlingComponent,
        ListingSubjectsComponent,
        LoadingComponent,
        NavbarComponent,
        NotFoundComponent,
        ReturnComponent,
        SearchBoxComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule,
        InfiniteScrollModule
    ],
    exports: [
        ErrorHandlingComponent,
        ListingSubjectsComponent,
        LoadingComponent,
        NavbarComponent,
        NotFoundComponent,
        ReturnComponent,
        SearchBoxComponent
    ]
})

export class UIModule { }