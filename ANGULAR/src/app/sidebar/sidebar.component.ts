import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router,private appComponent: AppComponent) {}

 

  activeItem: string = 'connections';

  setActive(item: string): void {
    this.activeItem = item;
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  logout() {
    // Remove the auth token from localStorage
    localStorage.removeItem('authtoken');
    console.log(localStorage.getItem('authtoken')); // This should log `null` after removing the token

    
    this.router.navigate(['/']);
  }
}

