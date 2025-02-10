import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  searchQuery: string = '';
  selectedUser: any = null; // Holds the selected user for chat
  
  users = [
    { name: 'John Doe', caption: 'Loves programming and coffee', image: 'assets/man.png', isFollowing: false, messages: [] },
    { name: 'Jane Smith', caption: 'Digital nomad and tech enthusiast', image: 'assets/femaleuser.png', isFollowing: false, messages: [] },
    { name: 'Alice Johnson', caption: 'Foodie and travel blogger', image: 'assets/man.png', isFollowing: false, messages: [] },
    { name: 'Raji Sekar', caption: 'Cooked up', image: 'assets/femaleuser.png', isFollowing: false, messages: [] },
    { name: 'Deepa Thiyagu', caption: 'Food blogger', image: 'assets/femaleuser.png', isFollowing: false, messages: [] },
    { name: 'Hareni Raj', caption: 'Travel blogger', image: 'assets/femaleuser.png', isFollowing: false, messages: [] }
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

  startChat(user: any) {
    this.selectedUser = user;
    if (!user.messages.length) {
      // Initialize the chat history for a new user if empty
      user.messages = [
        { text: `Hi ${user.name} here, How are you?`, isUser: false }
      ];
    }
  }

  // Toggle the following state
  followUser(user: any) {
    user.isFollowing = !user.isFollowing;
    console.log(`${user.isFollowing ? 'Following' : 'Unfollowed'} ${user.name}`);
  }

  // Set the selected user for chat
  selectUser(user: any) {
    this.selectedUser = user;
    // If messages are empty, initialize a default conversation for the selected user
    if (!user.messages.length) {
      user.messages = [
        { text: `Hey ${user.name} here, How are you?`, isUser: false }
      ];
    }
  }

  // Chat data
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() && this.selectedUser) {
      this.selectedUser.messages.push({
        text: this.newMessage,
        isUser: true, // Indicates the message is sent by the user
      });
      this.newMessage = ''; // Reset the input field
    }
  }
}
