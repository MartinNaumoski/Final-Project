import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from './api-calls.service'
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any ;
  pasvord:any;
  constructor(private apiCallsService: ApiCallsService,
              private globalService: GlobalsService,
              private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }
  logIn(){
    console.log(this.email)
    this.apiCallsService.login(this.pasvord,this.email)
      .subscribe((data) => {
        localStorage.setItem('authToken', data.access_token);
        if(data) {
          this.globalService.setUser(this.email);
          this.router.navigateByUrl('/booksOverview');
        }
      },
      (err) => {
        this.toastr.error('Sorry try again bad credentials !');
      });
  }

}
