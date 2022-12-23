import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private loggedIn = new BehaviorSubject<boolean>(true);
  constructor(private router: Router) { }

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  login(){
    this.loggedIn.next(true);
  }

  logout(){
    this.loggedIn.next(false);
  }
}
