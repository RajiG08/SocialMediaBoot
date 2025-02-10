import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AppComponent } from './app.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
// import { AuthGuard } from './services/auth.guard';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'user-signup', component: UsersignupComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'home', component: HomeComponent},
  {path:'feed', component:FeedComponent},
  {path:'profile', component:ProfileComponent},
  {path:'search', component:SearchbarComponent},
  {path:'message', component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
