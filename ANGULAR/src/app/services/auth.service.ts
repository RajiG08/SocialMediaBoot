import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    localStorage.removeItem('authtoken');
    localStorage.clear();
   // throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:7653/auth/login'; 

  private apiUrl = 'http://localhost:7653/users';
  
  

  getAuthenticatedUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }// Base URL for auth-related endpoints

  constructor(private http: HttpClient) {}


  
  public  loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('authToken'));

  login(loginData: { email: string; password: string; }): Observable<any> {
    console.log('Sending login request with data:', loginData);
    return this.http.post<any>(`${this.baseUrl}`, loginData);
    //   tap({
    //     next: (response) => {
    //       console.log('Login response received:', response);
    //       if (response || response.token) {
    //         localStorage.setItem('authToken', response.token); // Store token
    //         this.loggedIn.next(true); // Mark as logged in
    //       } else {
    //         console.error('Token not found in response.');
    //        // throw new Error('Token not found in response.');
    //       }
    //     },
    //     error: (err) => console.error('Error during login request:', err)
    //   })
    // );
  }
  
 
  
  
  

  // Signup method (new functionality)
  signup(signupData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, signupData); // Signup endpoint
  }

  getCurrentUserDetails(): Observable<any> {
    const token = localStorage.getItem('authToken');
    console.log('Token in auth:', token); // Debug the token value
    if (!token) {
      console.error('No token found in localStorage.');
    }
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/me`, { headers });
  }
  
  
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
