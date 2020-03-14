import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  user: any;;
  constructor() { }
  setUser(email){
    this.user = {
      email: email
    }
  }
  getUser(){
    return this.user;
  }
}
