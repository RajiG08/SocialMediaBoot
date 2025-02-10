import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})

export class ProfilecardComponent implements OnInit {
  username: string = ''; // Stores the username
  name: string = ''; // Stores the full name

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUserDetails().subscribe((data) => {
        console.log('API Response:', data); // Check if data is null or has the correct structure
        if (data) {
          this.username = data.username;
          this.name = data.name;
        }
      },
       (error) => {
        console.log('Error fetching user details:', error);
      }
    );
  }

}
