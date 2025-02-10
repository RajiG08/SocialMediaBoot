import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersignupComponent } from './usersignup/usersignup.component';
// import { AuthInterceptor } from './services/auth.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AuthGuard } from './services/auth.guard';
import { FeedComponent } from './feed/feed.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UsersignupComponent,
    SidebarComponent,
    FeedComponent,
    ProfileComponent,
    ProfilecardComponent,
    NavbarComponent,
    SearchbarComponent,
    MessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
