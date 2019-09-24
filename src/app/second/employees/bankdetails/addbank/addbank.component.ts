import { Component, OnInit } from '@angular/core';
import Addbank from './addbank';
import { AddbankService } from './addbank.service';
import { ActivatedRoute, Router } from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent implements OnInit {
  addbanks: Addbank[];
  addbanks1:any;
  error = '';
  success = '';
  user={
    id:"",
    accountholdername:"",
    account_number:"",
    bank_name:"",
    ifsc_code:"",
    pan_number:"",
    branch:"",
    userid:""
  }
  subscribedParam = "initial value";
  constructor(private addbankService: AddbankService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
      // console.log(this.subscribedParam);
      this.user.userid=this.subscribedParam;
    });
  }
  addbank(user: Addbank) {
    console.log(user);
    this.addbankService.store(user)
    .subscribe(
      (res: Addbank[]) => {
        // Update the list of to do list
        this.addbanks1 = res;
        if(this.addbanks1.output==true){
          $('.successmechPopup').modal('show');
        }
        // Inform the user
             // Reset the form
        
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/employees/bankdetails",this.subscribedParam]);
   }

  ngOnInit() {
  }


}