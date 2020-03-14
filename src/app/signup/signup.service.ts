import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  createUser(body):Observable<any>{
    return this.httpClient.post('http://localhost:8000/api/register',body)
  }
}
