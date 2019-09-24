import { Component, OnInit } from '@angular/core';
import Adddepartments from './adddepartments';
import { AdddepartmentService } from './adddepartments.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-adddepartments',
  templateUrl: './adddepartments.component.html',
  styleUrls: ['./adddepartments.component.css']
})
export class AdddepartmentsComponent implements OnInit {
  adddepartments: Adddepartments[];
  adddepartments1:any;
  error = '';
  success = '';
  user="";
  dept = {
    name: '',
    description: '',
    designations: []
  }
  designationsList = [];
  constructor(private adddepartmentService: AdddepartmentService,private router: Router) { }

  addMoreDesignations(desg): void {
    this.designationsList.push(desg.designations);
    this.dept.designations = [];
  }

  sliceDept(index) {
    this.designationsList.splice(index, 1);
  }

  saveDepartment(dept): void {
    if (this.designationsList.length == 0) {
      alert("Enter atlease one designation.");
      return;
    }
    // console.log(dept);
    // console.log(this.designationsList);
  }

  adddepartment(_dept: Adddepartments) {
    this.dept.designations = this.designationsList;
    // console.log(this.dept);
    //console.log(this.designationsList);
    this.adddepartmentService.store(this.dept)
    .subscribe(
      (res: Adddepartments[]) => {
        // Update the list of to do list
        this.adddepartments1 = res;

        // Inform the user
        if(this.adddepartments1.output==true)
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
    this.router.navigate(["/main/hrmange/departments"]);
   }
  ngOnInit() {
  }

}
