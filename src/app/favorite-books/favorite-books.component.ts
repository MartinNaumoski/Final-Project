import { Component, OnInit } from '@angular/core';
import { FavBooksService } from './fav-books.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

  constructor(private favBookService: FavBooksService,private router: Router) { }
  books:any = []
  bookAvatar: any = './../../assets/avatar.png'
  searchTearm: any;

  ngOnInit() {
    this.getFavBooks();
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
  search(){
    let tempBooks = []
    if(this.searchTearm != ""){
      this.books.forEach(element => {
        if(element.title == this.searchTearm){
          tempBooks.push(element)
        }
      });
      this.books =tempBooks
      console.log(tempBooks)
    }
    else{
      this.getFavBooks()
    }
  
    
  }
  clearSearch(){
    console.log(this.searchTearm)
    if(this.searchTearm == ""){
      this.getFavBooks()
    }
  }

}
