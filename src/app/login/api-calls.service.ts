import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private httpClient: HttpClient) { }

  login(pasvord,email):Observable<any>{
    let body ={ 
      "email" : email,
      "password" :pasvord
    }
    return this.httpClient.post('http://localhost:8000/api/login',body);
  }

}
