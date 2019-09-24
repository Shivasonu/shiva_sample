import { Component, OnInit } from '@angular/core';
import sendmessage from './sendmessage/sendmessage';
import { SendmessageService } from './sendmessage/sendmessage.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  sendmessage:sendmessage[];
  searchText;
  user_id;
  error = '';
  success = '';
  p=1;
  constructor(private route: ActivatedRoute,private cookieService: CookieService,private SendmessageService: SendmessageService, private router: Router, private activatedRoute: ActivatedRoute) { }
  gettodolist(id: string | number): void {
    this.SendmessageService.getAll(+id).subscribe(
      (res: sendmessage[]) => {
        this.sendmessage = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  ngOnInit() {
    this.user_id = this.cookieService.get("userId");
    // console.log(this.user_id);
    this.gettodolist(this.user_id);
  }
  

}
