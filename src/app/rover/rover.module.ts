import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CameraImagesComponent } from "./camera-images/camera-images.component";
import { RoverDetailsComponent } from "./rover-details/rover-details.component";
import { RoverRoutingModule } from "./rover-routing.module";
import { RoversListComponent } from "./rovers-list/rovers-list.component";

@NgModule({
    declarations: [
        RoversListComponent,
        RoverDetailsComponent,
        CameraImagesComponent
    ],
    imports: [
        CommonModule,
        RoverRoutingModule
    ]
})
export class RoverModule {

}