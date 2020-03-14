import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryesService {

  constructor(private httpClient: HttpClient) { }
  
  getInternetCategory():Observable<any>{
    return this.httpClient.get('http://localhost:8000/api/getInternetCategory');
  }
  getMicrosoftCategory():Observable<any>{
    return this.httpClient.get('http://localhost:8000/api/getMicrosoftCategory');
  }
  getWebCategory():Observable<any>{
    return this.httpClient.get('http://localhost:8000/api/getWebCategory');
  }
  getJavaCategory():Observable<any>{
    return this.httpClient.get('http://localhost:8000/api/getJavaCategory');
  }
    

}
