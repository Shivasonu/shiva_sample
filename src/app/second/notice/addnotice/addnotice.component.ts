import { Component, OnInit } from '@angular/core';
import Addnotice from './addnotice';
import { AddnoticeService } from './addnotice.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.css']
})
export class AddnoticeComponent implements OnInit {
  addnotices:any;
  error = '';
  success = '';
  user={
    title:"",
    description:"",
    date_time:""
  }
  constructor(private addnoticeService: AddnoticeService,private router: Router) { }
  addnotice(user: Addnotice) {
    console.log(user);
    this.addnoticeService.store(user)
    .subscribe(
      (res: Addnotice[]) => {
        // Update the list of to do list
        this.addnotices = res;

        // Inform the user
        if(this.addnotices.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }

        // Reset the form
        
      },
      (err) => this.error = err
    );
  }
  redirect(){
    this.router.navigate(["/main/hrmange/notice"]);
   }

  ngOnInit() {
  }

}
