import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup = new FormGroup({});
  submitted = false;
  requestError = "";
  serverErrors:string[] = [];
  private subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      "email": this.fb.control("", [Validators.required, Validators.email]),
      "username": this.fb.control("", [Validators.required]),
      "fullname": this.fb.control("", [Validators.required])
    });
  }

  handleSignUp() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      const user = new User(
        this.signUpForm.value.email,
        this.signUpForm.value.username,
        this.signUpForm.value.fullname
      )
      this.subscriptions.push(
        this.authService.register(user).subscribe(
          (resp: any)=> {  
            this.saveIntoSession(resp);
          },
          (error: HttpErrorResponse) => {
            console.log(error)
            this.requestError = error.message;
          }
        )
      );
    }
  }

  handleSignUpWithFetch() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      const user = new User(
        this.signUpForm.value.email,
        this.signUpForm.value.username,
        this.signUpForm.value.fullname
      )
      try {
        const userDetails = this.authService.registerWithFetch(user);
        this.saveIntoSession(userDetails);
      } catch(err: any) {
          this.requestError = err;
      }
    }
  }

  saveIntoSession(resp: any) {
    const user = new User(
      resp.email,
      resp.username,
      resp.fullname,
      resp.id
    ) 
    sessionStorage.setItem("UserDetails", JSON.stringify(user))
    this.router.navigate(['rover-list']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());    
  }

}
