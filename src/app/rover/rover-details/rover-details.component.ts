import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Camera } from '../../models/Camera';
import { Rover } from '../../models/Rover';
import { RoverService } from '../rover.service';

@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.scss']
})
export class RoverDetailsComponent implements OnInit {
  roverId: number = 0;
  rover: Rover = new Rover(0, "", "", "", 0, "", "", 0, []);
  constructor(private route: ActivatedRoute, private roverService: RoverService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.roverId = +params['id'];
        if (this.roverId > 0) {
          const rover =  this.roverService.findRover(this.roverId);
          if (rover) this.rover = rover;
        }
      }
    )
  }
}
