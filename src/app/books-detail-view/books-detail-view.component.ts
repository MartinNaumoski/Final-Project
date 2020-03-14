import { Component, OnInit, ɵConsole } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import { BookDetailViewService } from './book-detail-view.service'
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-books-detail-view',
  templateUrl: './books-detail-view.component.html',
  styleUrls: ['./books-detail-view.component.css']
})
export class BooksDetailViewComponent implements OnInit {
  booksData:any;
  from:any;
  to:any;
  bookAvatar: any = './../../assets/avatar.png'

  constructor(private router: Router,private modalService: NgbModal,
    private toastr: ToastrService,private route: ActivatedRoute
    ,private detailViewService: BookDetailViewService,private globalService: GlobalsService) { }
  closeResult: string;

  ngOnInit() {
    this.booksData = history.state  
    this.getBookDetail()

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      let fromDateTemp = Object.values(this.from)
      let toDateTemp = Object.values(this.to)
      let fromDate :string = "";
      let toDate = "";
      fromDateTemp.forEach(element => {
        fromDate += element   
        fromDate += "-"
      });
      fromDate = fromDate.substr(0,fromDate.length-1)

      toDateTemp.forEach(element => {
        toDate += element   
        toDate += "-"
      });
      toDate = toDate.substr(0,toDate.length-1)
      let body = {
        "book_id" : this.booksData.id,
        "reserved_from" : fromDate,
        "reserved_to" : toDate 
      }

      this.detailViewService.reserveBook(body)
      .subscribe((data)=>{
          this.toastr.success('Successfully reserved book!');
        },
        (err) =>{
         this.toastr.error('This book is already reserved on that dates!');
        });
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  pecati(){
  
  }
  getBookDetail(){
    this.detailViewService.getBookDetailView(this.route.snapshot.params)
    .subscribe((data) => {
      this.booksData = data
      console.log(this.booksData)
      this.to = this.booksData.DateTo

    })
  }

}
