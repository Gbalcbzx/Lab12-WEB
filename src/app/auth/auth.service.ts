import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {}

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
