import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PrintErrorComponent } from "../utils/print-error/print-error.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SignupComponent } from "./signup/signup.component";


@NgModule({
    declarations: [
        SignupComponent,
        PrintErrorComponent
    ],
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ]
})
export class AuthModule {

}