import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: any = '';
  lastName: any;
  email: any;
  password: any;
  confirmPassword: any;
  phone: any;

  flagForRegulate: boolean = false;
  firstNameFlag: boolean = false;
  lastNameFlag: boolean = false;
  emailFlag: boolean = false;
  passwordFlag: boolean = false;
  confirmPasswordFlas: boolean = false;
  constructor(private toastr: ToastrService,private signupService: SignupService,private router: Router) { }

  ngOnInit() {
  }
  signUp() {
    console.log("asd")
    this.checkRequiredFields()
  }
  initializeFlags()
  {
    this.flagForRegulate = false;
    this.firstNameFlag = false;
    this.lastNameFlag = false;
    this.emailFlag = false;
    this.passwordFlag = false;
    this.confirmPasswordFlas = false;
  }
  checkRequiredFields() {
    if(!this.password){this.passwordFlag = true}
    if(!this.confirmPassword){this.confirmPassword = true}

    if (this.password !== this.confirmPassword) {
      this.flagForRegulate = true;
      this.toastr.error('Passwords not matching !');
    }
    if (this.email === new FormControl(this.email, [Validators.email]) || !this.email) {
      this.flagForRegulate = true;
      this.emailFlag = true;
    }
    if (!this.firstName) {
      this.flagForRegulate = true;
      if(!this.firstName){
        this.firstNameFlag = true;
        this.toastr.error('Must enter first name!');
      }

    }
    this.makeCall()
   

  }
  makeCall(){
    if( !this.passwordFlag && !this.emailFlag && !this.firstNameFlag && !this.confirmPasswordFlas){
      let body = {
        "name": this.firstName,
        "email": this.email,
        "password" : this.password
      }
      this.signupService.createUser(body)
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/logIn');
      })
    }
    else{
      console.log("NE cini")
    }
  }

}
