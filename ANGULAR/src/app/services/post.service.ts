import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Comment {
  username: string;
  commentText: string;
}

export interface Post {
  postId: number;
  liked: boolean;
  image: string;  // Image as Base64 string
  caption: string;
  username: string;
  likesCount: number;
  comments: Comment[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:7653/posts';
  httpClient: any;

  //constructor(private http: HttpClient) {}

  // getPostsOfAcceptedFriends(): Observable<Post[]> {
  //   return this.http.get<Post[]>(`${this.apiUrl}/all`);
  // }
  

  // toggleLike(postId: number): Observable<any> {
  //   return this.http.post(`http://localhost:7653/like/${postId}`, {});  // Send a POST request to the backend to toggle like
  // }
   // Toggle like for a specific post
   toggleLike(postId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/like/${postId}`, {});
  }
  private baseUrl = 'http://localhost:7653/posts';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/all`, { responseType: 'text' }).pipe(
      map((response) => JSON.parse(response)),
      catchError((error) => {
        console.error('Error parsing posts:', error);
        return throwError(() => error);
      })
    );
  }
  
  
}
