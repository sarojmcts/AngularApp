import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform : FormGroup;
  constructor(private fb: FormBuilder, 
    private auth:AuthenticationService
  ,private router: Router) { }

  ngOnInit() {
    this.signupform= this.fb.group(
      {
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'email': [null, Validators.required],
        'password': [null, Validators.required],
      }
    );
  }
  signup(formdata:NgForm)
  {
    return this.auth.signup(formdata).subscribe(
      (user) => {
        console.log(`added user ${JSON.stringify(user)}`);
        this.router.navigate(['Login']);
      });
  }
}
