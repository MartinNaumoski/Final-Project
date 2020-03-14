import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  title: any;
  description: any;
  author: any;
  dateFrom :any = '0000-00-00';
  dateTo :any  = '0000-00-00';
  url:any;


  constructor(private adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit() {
  }
  inicializateBook(){

    let book = {
      'title' : this.title,
      'long_description' : this.description,
      'authors' : this.author,

      'url' : this.url  
    }
    return book;
  }
  addBook(){
    this.adminService.addBook(this.inicializateBook())
    .subscribe((data) => {
      console.log(data)
    })
    ,(err)=>{

    }
    this.toastr.success('Succesfuly added a article !');
    this.inicializateBook()

  }
}
