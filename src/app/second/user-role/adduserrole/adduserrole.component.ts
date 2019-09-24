import { Component, OnInit } from '@angular/core';
import Adduserrole from './adduserrole';
import { AdduserroleService } from './adduserrole.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-adduserrole',
  templateUrl: './adduserrole.component.html',
  styleUrls: ['./adduserrole.component.css']
})
export class AdduserroleComponent implements OnInit {
  adduserroles: Adduserrole[];
  adduserroles1: any;
  error = '';
  success = '';
user={
  name:"",
  description:"",
}
  constructor(private adduserroleService: AdduserroleService,private router: Router) { }
  adduserrole(user: Adduserrole) {
    console.log(user);
    this.adduserroleService.store(user)
    .subscribe(
      (res: Adduserrole[]) => {
        // Update the list of to do list
        this.adduserroles1 = res;
        if(this.adduserroles1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        // Inform the user
        // Reset the form

      },
      (err) => this.error = err
    );
  }
redirect(){
  this.router.navigate(["/main/hrmange/user-role"]);
}
  ngOnInit() {
  }

}
