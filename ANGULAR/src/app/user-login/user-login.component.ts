// user-login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
   email= '';
  password= '' ;
  public check: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login({email:this.email,password:this.password}).subscribe(
      (response) => {
      console.log("rosponse token", response);
        if(response || response.token){
          localStorage.setItem('authToken', response.token); 
          console.log('Login successful:', response);
        
        }
        else{
              console.log("login success but no token");
        }
        this.router.navigate(['/feed']);
        
      },
    (error)=>{
      console.log("login error:",error);
      alert("login failed");
    });
    }
      // error: (error) => {
      //   console.error('Login failed:', error);
      //   // if (error.status === 401) {
      //   //   alert('Invalid email or password');
      //   // } else {
      //   //   alert(`Login error: ${error.message}`);
      //   // }
      // }
    
    
  }
  
  

