import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userId = 1;
    constructor(private httpClient: HttpClient) {
    }
    
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
        })
    }
    
    register(user: User) {
        return this.httpClient.put(environment.userAPI + this.userId, user, this.httpOptions)
    }

    // Just alternate method with fetch, async and await
    async registerWithFetch(user: User) {
        const response = await fetch(environment.userAPI + this.userId, {
            method: 'PUT',
            body: JSON.stringify(user),
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

    increaseUserId() {
        this.userId++;
    }
    
    isAuthenticated() {
        return !!sessionStorage.getItem('UserDetails');
    }

}