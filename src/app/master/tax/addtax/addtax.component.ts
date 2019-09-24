import { Component, OnInit } from '@angular/core';
import Addtax from './addtax';
import { AddtaxService } from './addtax.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addtax',
  templateUrl: './addtax.component.html',
  styleUrls: ['./addtax.component.css']
})
export class AddtaxComponent implements OnInit {
  addtaxs: any;
  error = '';
  success = '';
user={
  name :"",
  percent:""
}
  constructor(private addtaxService: AddtaxService,private router: Router) { }

  addtax(user: Addtax) {
    console.log(user);
    this.addtaxService.store(user)
    .subscribe(
      (res: Addtax[]) => {
        // Update the list of to do list
        this.addtaxs = res;
        if(this.addtaxs.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/master/tax"]);
  }

  ngOnInit() {
  }

}
