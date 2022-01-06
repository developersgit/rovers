import { Camera } from "./Camera";
import { CameraInterface } from "./RoverResp";


export class Rover {
    id: number;
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    status: string;
    total_photos: number;
    cameras: Camera[] = [];

    constructor(
        id: number, 
        landingDate: string, 
        launchDate: string, 
        maxDate: string, 
        maxSol: number, 
        name: string, 
        status: string, 
        totalPhotos: number, 
        cameras: CameraInterface[] 
    ) {
        this.id = id ? id : 0;
        this.landing_date = landingDate;
        this.launch_date = launchDate;
        this.max_date = maxDate;
        this.max_sol = maxSol;
        this.name = name;
        this.status = status;
        this.total_photos = totalPhotos;
        this.cameras = [];
        cameras.forEach(photo => {
            const camera = new Camera(
                photo.id,
                photo.full_name, 
                photo.name,
                photo.rover_id
            );
            this.cameras.push(camera);
        })
    }
}