import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ServiceComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
