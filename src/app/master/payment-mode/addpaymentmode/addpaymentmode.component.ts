import { Component, OnInit } from '@angular/core';
import Addpaymentmode from './addpaymentmode';
import { AddpaymentmodeService } from './addpaymentmode.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-addpaymentmode',
  templateUrl: './addpaymentmode.component.html',
  styleUrls: ['./addpaymentmode.component.css']
})
export class AddpaymentmodeComponent implements OnInit {
  addpaymentmodes:any;
  error = '';
  success = '';
user={
  name :""
}
  constructor(private addpaymentmodeService: AddpaymentmodeService,private router: Router) { }

  addpaymentmode(user: Addpaymentmode) {
    console.log(user);
    this.addpaymentmodeService.store(user)
    .subscribe(
      (res: Addpaymentmode[]) => {
        // Update the list of to do list
        this.addpaymentmodes = res;
        if(this.addpaymentmodes.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/master/payment-mode"]);
  }

  ngOnInit() {
  }

}
