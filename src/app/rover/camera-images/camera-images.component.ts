import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CameraPhoto } from '../../models/CameraPhoto';
import { RoverService } from '../rover.service';

@Component({
  selector: 'app-camera-images',
  templateUrl: './camera-images.component.html',
  styleUrls: ['./camera-images.component.scss']
})
export class CameraImagesComponent implements OnInit, OnDestroy {
  cameraName = '';
  requestError = '';
  fetchingImagesIndicater = false;
  cameraPhotos: CameraPhoto[] = [];
  private subscriptions: Subscription[] = [];
  
  constructor(private route: ActivatedRoute, private roverService: RoverService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe(
        (params: Params) => {
          this.cameraName = params['cameraName'];
          this.fetchCameraImages();
        }
      )
    )
  }

  fetchCameraImages() {
    this.fetchingImagesIndicater = true;
    this.subscriptions.push(
      this.roverService.getCameraImages(this.cameraName).subscribe(
        (resp: any)=> {  
          this.fetchingImagesIndicater = false;
          const photos = resp.photos;
          this.cameraPhotos = [];
          photos.forEach((photo: any) => {
            this.cameraPhotos.push(new CameraPhoto(photo.img_src));
          });
          console.log(this.cameraPhotos)
          this.roverService.setCameraPhotos(this.cameraPhotos);
        },
        (error: HttpErrorResponse) => {
          this.requestError = error.message;
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());    
  }

}
