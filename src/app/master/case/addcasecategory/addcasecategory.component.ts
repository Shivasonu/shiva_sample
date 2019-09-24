import { Component, OnInit } from '@angular/core';
import Addcasecategory from './addcasecategory';
import { AddcasecategoryService } from './addcasecategory.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-addcasecategory',
  templateUrl: './addcasecategory.component.html',
  styleUrls: ['./addcasecategory.component.css']
})
export class AddcasecategoryComponent implements OnInit {
  addcasecategorys: Addcasecategory[];
  addcasecategorys1:any;
  error = '';
  success = '';
user={
  name :"",
  parent_id:""
}

  constructor(private adddcasecategoryservice: AddcasecategoryService,private router: Router) { 
    this.getcasecategory();
  }

  getcasecategory(): void {
    this.adddcasecategoryservice.getcasecategoryname().subscribe(data=> {
        this.addcasecategorys = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  addcasecategory(user: Addcasecategory) {
    console.log(user);
    this.adddcasecategoryservice.store(user)
    .subscribe(
      (res: Addcasecategory[]) => {
        // Update the list of to do list
        this.addcasecategorys1 = res;
        if(this.addcasecategorys1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/master/case"]);
  }
  ngOnInit() {
  }

}
