import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookOverVIewService {

  constructor(private HttpClient: HttpClient) { }
  
  getAllBooks() : Observable<any> {
    return this.HttpClient.get('http://localhost:8000/api/getAllBooks',{
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': `application/json`
      })
    })
  }
  makeFavourite(body) :Observable<any>{
    console.log(body)
    return this.HttpClient.post('http://localhost:8000/api/makeFavourite',body)
  }
}
