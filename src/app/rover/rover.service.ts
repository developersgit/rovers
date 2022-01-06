import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CameraPhoto } from "../models/CameraPhoto";
import { Rover } from "../models/Rover";

@Injectable({
    providedIn: 'root'
})
export class RoverService {
    private roversList: Rover[] = [];
    private cameraPhotos: CameraPhoto[] = [];
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
        })
    }
    constructor(private httpClient: HttpClient) {}

    setRoverList(rovers: Rover[]) {
        this.roversList = rovers;
    }

    setCameraPhotos(photos: CameraPhoto[]) {
        this.cameraPhotos = photos;
    }

    findRover(id: number) {
        const rover = this.roversList.find( rover => rover.id === id );
        return rover;
    }

    getRoversList() {
        return this.httpClient.get(environment.nasaRoversAPI, this.httpOptions);
    }

    getCameraImages(cameraName: string) {
        return this.httpClient.get(environment.nasaPhotosAPI + '&camera=' + cameraName, this.httpOptions);
    }

    // Just to show that we can acheive the same thing by async, await and fetch api
    async getRoversListAsync() {
        const response = await fetch(environment.nasaRoversAPI, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        return await response.json();
    }

}