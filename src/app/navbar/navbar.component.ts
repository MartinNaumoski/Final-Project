import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private globalService: GlobalsService) { }

  ngOnInit() {
    this.user = this.globalService.getUser();
    console.log(this.user);
  }

}
