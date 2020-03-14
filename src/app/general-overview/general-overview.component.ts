import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general-overview',
  templateUrl: './general-overview.component.html',
  styleUrls: ['./general-overview.component.css']
})
export class GeneralOverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  routeToAllBooks(){
    this.router.navigate(['/booksOverview']);
  }
  routeToAllTables(){
    this.router.navigate(['/tableOverview']);
  }
  routeToAllPRoectors(){
    this.router.navigate(['/proectorsOverview']);

  }
}
