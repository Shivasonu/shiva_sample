import { Component, OnInit } from '@angular/core';
import Addcasestages from './addcasestages';
import { AddcasestagesService } from './addcasestages.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-addcasestages',
  templateUrl: './addcasestages.component.html',
  styleUrls: ['./addcasestages.component.css']
})
export class AddcasestagesComponent implements OnInit {
  addcasestagess: any;
  error = '';
  success = '';
user={
  name :""
}
constructor(private addcasestagesService: AddcasestagesService,private router: Router) { }

addcasestages(user: Addcasestages) {
  console.log(user);
  this.addcasestagesService.store(user)
  .subscribe(
    (res: Addcasestages[]) => {
      // Update the list of to do list
      this.addcasestagess = res;
      if(this.addcasestagess.output==true)
      {
        $('.successmechPopup').modal('show');
       // this.router.navigate(["/main/dashboard"]);
      }
    },
    (err) => this.error = err
  );
}

redirect(){
  this.router.navigate(["/main/master/case-stages"]);
}

ngOnInit() {
}


}
