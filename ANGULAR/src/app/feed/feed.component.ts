import { Component, OnInit } from '@angular/core';

export interface Comment {
  username: string;
  commentText: string;
}

export interface Post {
  postId: number;
  liked: boolean;
  image: string;  // Image as URL or relative path
  caption: string;
  username: string;
  likesCount: number;
  comments: Comment[];
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];

  // Static posts data
  constructor() {
    this.posts = this.getStaticPosts();
  }

  ngOnInit(): void {}

  // Static data for 8 posts (hardcoded)
  getStaticPosts(): Post[] {
    return [
      {
        postId: 1,
        liked: false,
        image: 'assets/image1.jpg',
        caption: 'A beautiful sunset in the mountains!',
        username: 'Deepa',
        likesCount: 45,
        comments: [
          { username: 'Jane Smith', commentText: 'Wow, amazing view!' },
          { username: 'Mark Johnson', commentText: 'I wish I was there!' }
        ]
      },
      {
        postId: 2,
        liked: false,
        image: 'assets/image2.jpg',
        caption: 'Had a great time at the beach!',
        username: 'Raji',
        likesCount: 78,
        comments: [
          { username: 'Sarah Lee', commentText: 'Looks like a fun day!' },
          { username: 'Tom Wilson', commentText: 'I love the beach!' }
        ]
      },
      {
        postId: 3,
        liked: false,
        image: 'assets/image3.jpg',
        caption: 'Delicious dinner at a new restaurant.',
        username: 'Hareni',
        likesCount: 102,
        comments: [
          { username: 'Olivia Martin', commentText: 'Yum! What did you have?' },
          { username: 'Sophia Moore', commentText: 'Looks so tasty!' }
        ]
      },
      {
        postId: 4,
        liked: false,
        image: 'assets/image4.jpg',
        caption: 'Exploring the city on a bike ride.',
        username: 'Deepa',
        likesCount: 56,
        comments: [
          { username: 'James Wilson', commentText: 'Great adventure!' },
          { username: 'Sophia Davis', commentText: 'Looks like fun!' }
        ]
      },
      {
        postId: 5,
        liked: false,
        image: 'assets/image5.jpg',
        caption: 'Hiking up the trails!',
        username: 'Daniel Green',
        likesCount: 89,
        comments: [
          { username: 'Benjamin Clark', commentText: 'Such a beautiful spot!' },
          { username: 'Lucy Adams', commentText: 'I need to try this hike!' }
        ]
      },
      {
        postId: 6,
        liked: false,
        image: 'assets/image6.jpg',
        caption: 'Chilling at the lake with friends.',
        username: 'Mia Allen',
        likesCount: 64,
        comments: [
          { username: 'Ethan Scott', commentText: 'Looks so peaceful!' },
          { username: 'Chloe King', commentText: 'I love lakes!' }
        ]
      },
      {
        postId: 7,
        liked: false,
        image: 'assets/image7.jpg',
        caption: 'Spending the day in the park!',
        username: 'Ava Thomas',
        likesCount: 120,
        comments: [
          { username: 'Liam White', commentText: 'Such a relaxing day!' },
          { username: 'Charlotte Walker', commentText: 'Great weather!' }
        ]
      },
      {
        postId: 8,
        liked: false,
        image: 'assets/image8.jpg',
        caption: 'A fun night out with friends!',
        username: 'Noah Harris',
        likesCount: 210,
        comments: [
          { username: 'Zoe Clark', commentText: 'Looks like an awesome night!' },
          { username: 'Amelia Lee', commentText: 'So much fun!' }
        ]
      }
    ];
  }

  toggleLike(post: Post): void {
    post.liked = !post.liked;
    post.likesCount += post.liked ? 1 : -1;
  }
}
