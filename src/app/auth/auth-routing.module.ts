import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGaurd } from "../gaurds/login-gaurd.service";
import { SignupComponent } from "./signup/signup.component";

const authRoutes: Routes = [
    { path: "", component: SignupComponent, canActivate: [LoginGaurd], pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {

}