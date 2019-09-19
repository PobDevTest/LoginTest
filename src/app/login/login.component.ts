import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //added vars
  loading = false;
    submitted = false;
    returnUrl: string;

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
        

        private authenticationService: AuthenticationService,
      ) { }

      ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

    }



 

  onSubmit() {
    console.log("Return object created by Angular is below as FormGroup");
    console.log( this.loginForm);
  }



  onClearPosts() {
    // Send Http request
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://post-request.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  
}
