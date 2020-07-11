import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm,ReactiveFormsModule  } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import {  Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginform : FormGroup;
  returnUrl: string;
  constructor(private fb: FormBuilder, 
    private auth:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginform= this.fb.group(
      {        
        'email': ['',  [Validators.required, Validators.email]],
        'password': ['', Validators.required],
      }
    );
    console.log("return url is "+this.route.snapshot.queryParams['returnUrl']);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginform.controls; }

  login(formData: NgForm) {
    return this.auth.login(formData).subscribe(
      (user) => {
        console.log(this.returnUrl);
        this.router.navigate([this.returnUrl]);
      });
  }

}
