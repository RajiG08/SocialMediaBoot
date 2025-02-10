import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 constructor(private router :Router) {}
  
   

 isloggedin:boolean=false;

 navigateTouserLogin() {
  console.log('Navigation');
   this.router.navigate(['/userlogin']);
  
  // window.open('/userlogin');

}


navigateTouserSignup() {
  console.log('Navigation to signup');
   this.router.navigate(['/user-signup']);
  // window.open('/userlogin');

}

}
