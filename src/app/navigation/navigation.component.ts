import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showSubmenu;
  showSubmenucases;
  showSubmenutasks;
  showSubmenumaster;
  userroll;
  name;
  roleid;
  public loading = false;
  getUrl;
  userName;
  profileImage;
  cookieValue = 'UNKNOWN';

  private _sessionId: string;

constructor(private cookieService: CookieService,private router: Router) {
  this._sessionId = cookieService.get("sessionId");
}


  logout() {
    this.cookieService.deleteAll();
    sessionStorage.clear();
  };

  ngOnInit() {
    this.userroll = this.cookieService.get('loggededInUser');
    this.userName = this.cookieService.get("name");
    this.profileImage = this.cookieService.get('profileImage');
    this.roleid  = this.cookieService.get('roleId');
    if(this.userName == ''){
      this.router.navigate(['/']);
    }
   
      // this.cookieValue = this.cookieService.get('name'); // To Get Cookie
   
  }

}
