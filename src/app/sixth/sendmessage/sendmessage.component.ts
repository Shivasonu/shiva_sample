import { Component, OnInit } from '@angular/core';
import sendmessage from './sendmessage';
import { SendmessageService } from './sendmessage.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {
  sendmessage:sendmessage[];
  user={
    message:"",
    login_id:"",
    userid:"",
  }
  error = '';
  success = '';
  subscribedParam = "initial value";
  constructor(private SendmessageService: SendmessageService,private cookieService: CookieService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
      // console.log(this.subscribedParam);
      this.user.userid=this.subscribedParam;
      this.user.login_id = this.cookieService.get("userId");
    });
   }
  addmessage(user: sendmessage) {
    console.log(user);
    
    this.SendmessageService.store(user)
    .subscribe(
      (res: sendmessage[]) => {
        // Update the list of to do list
        this.sendmessage = res;

        // Inform the user
        this.success = 'Added successfully';
        this.gettodolist(this.user.userid);
        this.user.message="";
        // Reset the form
      },
      (err) => this.error = err
    );
  }

  gettodolist(id: string | number): void {
    this.SendmessageService.getmessage(+id).subscribe(
      (res: sendmessage[]) => {
        this.sendmessage = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }


  ngOnInit() {
    this.gettodolist(this.user.userid);
  }

}
