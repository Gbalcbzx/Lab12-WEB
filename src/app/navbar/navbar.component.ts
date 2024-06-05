import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
