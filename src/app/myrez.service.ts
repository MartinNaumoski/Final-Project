import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyrezService {

  constructor(private HttpClient: HttpClient) { }

  getMyReservations():Observable<any>{
    return this.HttpClient.get('http://localhost:8000/api/getMyReservations')
  }
}
