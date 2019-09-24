import { Component, OnInit } from '@angular/core';
import { Addholidayservice } from './addholidays.service';
import { Router } from '@angular/router';
import Addholidays from './addholidays';
declare var $: any;
@Component({
  selector: 'app-addholidays',
  templateUrl: './addholidays.component.html',
  styleUrls: ['./addholidays.component.css']
})
export class AddholidaysComponent implements OnInit {
  // addholidays1:Addholidays[];
  error = '';
  addholdidays: any;
  success = '';
  holidays={
    name:"",
    dates:""
  }
  
  constructor(private addholidayservice : Addholidayservice,private router: Router) { }
  add_vacation(jhtr){
    console.log(jhtr);
    this.addholidayservice.add_holiday(jhtr)
      .subscribe(
        (res: any) => {
          // Update the list of to do list
          this.addholdidays = res;
          if(this.addholdidays.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => {
          return this.error = err;
        }
        
      );
  }

  
  redirect(){
    this.router.navigate(["/main/hrmange/holidays"]);
   }
  ngOnInit() {
  }

}
