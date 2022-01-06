import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "../gaurds/auth-gaurd.service";
import { CameraImagesComponent } from "./camera-images/camera-images.component";
import { RoverDetailsComponent } from "./rover-details/rover-details.component";
import { RoversListComponent } from "./rovers-list/rovers-list.component";

const roverRouts: Routes = [
    { path: "rover-list", component: RoversListComponent, canActivate: [AuthGaurd]},
    { path: "rover-list/:id", component: RoverDetailsComponent, canActivate: [AuthGaurd], canActivateChild: [AuthGaurd], children: [
        { path: ":cameraName", component: CameraImagesComponent }
    ]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(roverRouts)
    ],
    exports: [
        RouterModule
    ]

})
export class RoverRoutingModule {

}