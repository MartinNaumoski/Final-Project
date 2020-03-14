import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BookOverVIewService } from './book-over-view.service'
import { ToastrService } from 'ngx-toastr';
import { CategoryesService } from './categoryesService'
@Component({
  selector: 'app-books-over-view',
  templateUrl: './books-over-view.component.html',
  styleUrls: ['./books-over-view.component.css']
})
export class BooksOverViewComponent implements OnInit {
 
  constructor(private router: Router, private booksService: BookOverVIewService,
    private toastr: ToastrService , private CategoryesService:CategoryesService) { }
  bookAvatar: any = './../../assets/avatar.png'
  books: any = []
  favFlag: boolean =false
  searchTearm: any;
  ngOnInit() {
    this.getAllBooks()
  }
  routueToBOokDetailView(bookID,bookTitle,bookdescription,bookURL)
  {
    this.router.navigateByUrl('/bookDetail/:'+bookID, { state: { id:1 , title:bookTitle,description:bookdescription,url:bookURL } });
  }
  

  getAllBooks(){
    this.booksService.getAllBooks()
      .subscribe((data) => {
        this.books = data
      }),
      (err) => {
       console.log(err) 
      }
  }
  toogleFav(book){
    let body = {
      "book_id" : book.id
    }
    this.booksService.makeFavourite(body)
    .subscribe((data)=>{
    })
  }
  search(){
    let tempBooks = []
    if(this.searchTearm != ""){
      this.books.forEach(element => {
        if(element.title == this.searchTearm){
          tempBooks.push(element)
        }
      });
      if(tempBooks.length == 0){
        this.toastr.error('Sorry we dont find book with that name..');
      }
      this.books =tempBooks
    }
    else{
      this.getAllBooks()
    }
  
    
  }
  clearSearch(){
    if(this.searchTearm == ""){
      this.getAllBooks()
    }
  }


  searchInternetCategory(){
    this.CategoryesService.getInternetCategory()
    .subscribe((data)=>{
      this.books = data;
    })
  }

  searchMiscrosoftCategory(){
    this.CategoryesService.getMicrosoftCategory()
    .subscribe((data)=>{
      this.books = data;
    })
  }

  searchWebCategory(){
    this.CategoryesService.getWebCategory()
    .subscribe((data)=>{
      this.books = data;
    })
  }

  searchJavaCategory(){
      this.CategoryesService.getJavaCategory()
      .subscribe((data)=>{
        this.books = data;
      })
  }
 

}
