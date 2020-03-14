import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private HttpClient:HttpClient) { }
  
  addBook(body):Observable<any>{
    return  this.HttpClient.post('http://localhost:8000/api/addBook',body);
  }
}
