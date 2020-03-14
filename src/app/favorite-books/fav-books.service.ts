import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavBooksService {
  constructor(private httpClient: HttpClient) { }

  getFavoriteBooks():Observable<any>{
    return this.httpClient.get('http://localhost:8000/api/getFavorites');
  }
}
