import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../services/auth.service';

interface User {
  username: string;
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
   
  username: string = '';
  name: string=''
  isLoading: boolean = true; // Track loading state
  errorMessage: string = ''; // Error message if the API call fails

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUserDetails().subscribe(
      (user: User) => {
        console.log('User details fetched:', user);
        if (user) {
          this.username = user.username || 'No Username';
          this.name = user.name || 'No Name';
        }
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
        this.username = 'Error fetching username';
        this.name = 'Error fetching name';
      }
    );
  }
  


  
  // Define the posts array\
  posts = [
    {
      username: 'John Doe',
      image: 'assets/image2.jpg',
      caption: 'My first post!',
      likesCount: 10,
      liked: false,
      comments: [
        { username: 'Jane', commentText: 'Nice post!' },
        { username: 'Mike', commentText: 'Awesome!' }
      ]
    },
    {
      username: 'Jane Smith',
      image: 'assets/image1.jpg',
      caption: 'Love this picture!',
      likesCount: 5,
      liked: false,
      comments: [
        { username: 'John', commentText: 'Great photo!' }
      ]
    }
    // Add more post objects as needed
  ];

  //constructor() {}

 // ngOnInit(): void {}

  // Method to toggle like and update the like count
  toggleLike(post: any): void {
    post.liked = !post.liked; // Toggle the liked status
    post.likesCount += post.liked ? 1 : -1; // Increment or decrement the likes count
  }
}
