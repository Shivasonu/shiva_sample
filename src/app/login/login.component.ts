import { Component, OnInit } from '@angular/core';
import logins from './login';
import { loginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  loginss: logins[];
  error = '';
  success = '';
  users={
    email:"",
    password:"",
  }
  cookieValue = 'UNKNOWN';
  errmessage;
  userroll;
  userName;
  profileImage
  public loading = false;
  errmsg;
  data = [];
  customLoadingTemplate;
  private loggededInUser;
  private NotLoggedIn;
  private modules = [];
  private isAdmin: boolean;
  private name;
  template;
  constructor(private loginService: loginService,private router: Router, private cookieService: CookieService) {
    this.isAdmin = false;
    this.users;
    this.errmessage;
    this.cookieService;
    if (this.name == "NotLoggedIn") {
      alert(this.name);
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
    }
   }
  login(users: logins) {
    this.loginService.store(users)
    .subscribe(
      (res: logins[]) => {
        this.loading = false;
        if(res['data'] != null){
        if (res['data'][0]['start'] == true) {
          this.cookieService.set('loggededInUser', res['data'][0]['username'] );
          this.cookieService.set('Name', res['data'][0]['username']);
          this.cookieService.set('roleId', res['data'][0]['user_role']);
          this.cookieService.set('userId', res['data'][0]['id']);
          this.cookieService.set('email', res['data'][0]['email']);
          this.cookieService.set( 'name', res['data'][0]['username']);
          sessionStorage.setItem('loggededInUser', res['data'][0]['username'] );
          sessionStorage.setItem('Name', res['data'][0]['username']);
          sessionStorage.setItem('roleId', res['data'][0]['user_role']);
          sessionStorage.setItem('userId', res['data'][0]['id']);
          sessionStorage.setItem('email', res['data'][0]['email']);
          sessionStorage.setItem( 'name', res['data'][0]['username']);
            // console.log(data);
            if (res['data'][0]['start'] == true) {
              console.log(res['data'][0]['start']);
              this.cookieService.set('loggededInUser', res['data'][0]['username'] );
              this.cookieService.set('Name', res['data'][0]['username']);
              this.cookieService.set('roleId', res['data'][0]['user_role']);
              this.cookieService.set('userId', res['data'][0]['id']);
              this.cookieService.set('email', res['data'][0]['email']);
              this.cookieService.set( 'name', res['data'][0]['username']);
              if(res['data'][0]['user_role']<3){
              this.router.navigate(['main/dashboard']);
            }
            else {
              console.log(res['data'][0]['user_role']);
              this.router.navigate(['main/cdashboard']);
            }
            }
        
        }
      }
        else {
          this.errmessage = "Login Failed, Please Enter Valid Credentials.";
          this.errmsg = true;
          this.router.navigate(['/']);
        }
      },
      (err) => this.error = err
    );
  }

  ngOnInit(): void {
     // To Set Cookie
     this.userroll = this.cookieService.get('loggededInUser');
     this.userName = this.cookieService.get("name");
     this.profileImage = this.cookieService.get('profileImage');
     
     
     if(this.userName == ''){
       this.router.navigate(['/']);
     }
  }

}
