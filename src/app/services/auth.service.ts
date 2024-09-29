import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
  }
  login() {
    this.loggedIn.next(true);
  }
}
