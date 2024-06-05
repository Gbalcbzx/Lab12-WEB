import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, NotfoundComponent], // Importa el componente NotFoundComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab12-WEB';
  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbarAndFooter = this.isRouteDefined(event.urlAfterRedirects);
      }
    });
  }

  isRouteDefined(url: string): boolean {
    const routePaths = this.router.config.map(route => route.path);
    return routePaths.includes(url.split('/')[1]);
  }
}
