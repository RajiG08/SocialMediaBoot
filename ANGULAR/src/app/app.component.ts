import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialMediAng';
  isUserLoggedIn: boolean = false;
  showSidebar: boolean = true; // Control visibility of sidebar

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to route changes to hide/show sidebar
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Hide sidebar only on the home page ('' path)
        this.showSidebar = !(event.url === '/' || event.url === '/home');
      });

    // Subscribe to login status to show sidebar only when user is logged in
    this.authService.loggedIn.subscribe(loggedIn => {
      this.isUserLoggedIn = loggedIn;
    });
  }
}
