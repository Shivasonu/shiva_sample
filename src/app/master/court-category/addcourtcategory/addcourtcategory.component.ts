import { Component, OnInit } from '@angular/core';
import Addcourtcategory from './addcourtcategory';
import { AddcourtcategoryService } from './addcourtcategory.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-addcourtcategory',
  templateUrl: './addcourtcategory.component.html',
  styleUrls: ['./addcourtcategory.component.css']
})
export class AddcourtcategoryComponent implements OnInit {
  addcourtcategorys: any;
  error = '';
  success = '';
user={
  name :""
}
constructor(private addcourtcategoryService: AddcourtcategoryService,private router: Router) { }

addcourtcategory(user: Addcourtcategory) {
  console.log(user);
  this.addcourtcategoryService.store(user)
  .subscribe(
    (res: Addcourtcategory[]) => {
      // Update the list of to do list
      this.addcourtcategorys = res;
      if(this.addcourtcategorys.output==true)
      {
        $('.successmechPopup').modal('show');
       // this.router.navigate(["/main/dashboard"]);
      }      
    },
    (err) => this.error = err
  );
}

redirect(){
  this.router.navigate(["/main/master/court-category"]);
}

  ngOnInit() {

  }

}
