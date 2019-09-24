import { Component, OnInit } from '@angular/core';
import Addleaves from './addleaves';
import { AddleavesService } from './addleaves.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addleaves',
  templateUrl: './addleaves.component.html',
  styleUrls: ['./addleaves.component.css']
})
export class AddleavesComponent implements OnInit {
  addleaves: any;
  error = '';
  success = '';
user={
  leavetype :"",
  description:"",
  leaves:""
}

  constructor(private addleavesService: AddleavesService,private router: Router) { }
  
  addleave(user: Addleaves) {
    console.log(user);
    this.addleavesService.store(user)
    .subscribe(
      (res: Addleaves[]) => {
        // Update the list of to do list
        this.addleaves = res;
        if(this.addleaves.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/leavetype"]);
   }
  ngOnInit() {
  }

}
