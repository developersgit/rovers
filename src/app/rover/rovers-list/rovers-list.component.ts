import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Rover } from '../../models/Rover';
import { RoverResp } from '../../models/RoverResp';
import { RoverService } from '../rover.service';

@Component({
  selector: 'app-rovers-list',
  templateUrl: './rovers-list.component.html',
  styleUrls: ['./rovers-list.component.scss']
})
export class RoversListComponent implements OnInit, OnDestroy {
  requestError = "";
  roversList: Rover[] = [];
  private subscriptions: Subscription[] = [];
  constructor(private roverService: RoverService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.roverService.getRoversList().subscribe(
        (resp: any)=> {  
          const rovers = resp.rovers;
          rovers.forEach((rover: RoverResp) => {
            const roverClone = new Rover(
              rover.id, 
              rover.landing_date,
              rover.landing_date,
              rover.max_date,
              rover.max_sol,
              rover.name,
              rover.status,
              rover.total_photos,
              rover.cameras
            );
            this.roversList.push(roverClone);
          });
          this.roverService.setRoverList(this.roversList);
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
