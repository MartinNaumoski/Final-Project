import { Component, OnInit } from '@angular/core';
import { MyrezService } from './../myrez.service'
import { FavBooksService } from '../..app/../favorite-books/fav-books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  books: any;
  constructor(private favBookService: FavBooksService,private myrezService:MyrezService,private router: Router) { }
  bookAvatar: any = './../../assets/avatar.png'

  ngOnInit() {
    // this.myrezService.getMyReservations()
    // .subscribe((data) => {
    //   console.log(data)
    //   this.books = data
    // })
    this.getFavBooks()
  }
  getFavBooks(){
    this.favBookService.getFavoriteBooks()
    .subscribe((data)=>{
      console.log(data)
      this.books = data
    });
  }
  routueToBOokDetailView(bookID,bookTitle,bookdescription,bookURL)
  {
    this.router.navigateByUrl('/bookDetail/:'+bookID, { state: { id:1 , title:bookTitle,description:bookdescription,url:bookURL } });
  }
}
