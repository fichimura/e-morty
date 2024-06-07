import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";

import { SignupComponent } from '../../pages/auth/signup/signup.component';
import { SigninComponent } from '../../pages/auth/signin/signin.component';
import { ErrorHandlingComponent } from "../../UI/error-handling/error-handling.component";
import { AuthService } from "../../services/auth.service";
import { UIModule } from "../../UI/ui.module";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule
    ],
    providers: [AuthService]
})
export class AuthModule{ }