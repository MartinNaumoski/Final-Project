
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookDetailViewService {

  constructor(private HttpClient: HttpClient) { }
  
  getBookDetailView(id):Observable<any>{
    return  this.HttpClient.get('http://localhost:8000/api/getBook/' + id.id.substr(1))
  }
  reserveBook(body):Observable<any>{
    return  this.HttpClient.post('http://localhost:8000/api/reserveBook',body )
  }
}
