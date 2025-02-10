import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  searchQuery: string = '';

  users = [
    { name: 'John Doe', caption: 'Loves programming and coffee', image: 'assets/man.png', isFollowing: false },
    { name: 'Jane Smith', caption: 'Digital nomad and tech enthusiast', image: 'assets/femaleuser.png', isFollowing: false },
    { name: 'Alice Johnson', caption: 'Foodie and travel blogger', image: 'assets/man.png', isFollowing: false },
    { name: 'Raji Sekar', caption: 'Cooked up', image: 'assets/femaleuser.png', isFollowing: false },
    { name: 'Deepa Thiyagu', caption: 'Food blogger', image: 'assets/femaleuser.png', isFollowing: false },
    { name: 'Hareni Raj', caption: 'Travel blogger', image: 'assets/femaleuser.png', isFollowing: false }
  ];

  // Filter users based on search query
  filteredUsers() {
    return this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Triggered when the search button is clicked
  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  // Toggle the following state
  followUser(user: any) {
    user.isFollowing = !user.isFollowing;
    console.log(`${user.isFollowing ? 'Following' : 'Unfollowed'} ${user.name}`);
  }

}
