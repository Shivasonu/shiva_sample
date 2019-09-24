import { Component, OnInit } from '@angular/core';
import Adddepartment from './adddepartments/adddepartments';
import { AdddepartmentService } from './adddepartments/adddepartments.service';
declare var $: any;
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  adddepartments: Adddepartment[];
  adddepartments1:any;
  departmentdata:any; 
  error = '';
  success = '';
  p=1;
user={
  name :"",
  description:"",
  designations:"",
}
searchText;
constructor(private adddepartmentService: AdddepartmentService) { }

ngOnInit() {
  this.gettodolist();
}

gettodolist(): void {
  this.adddepartmentService.getAll().subscribe(
    (res: Adddepartment[]) => {
      this.adddepartments = res;
    },
    (err) => {
      this.error = err;
    }
  );
}



deletedepartment(data: string | number) {
  this.departmentdata=data;
  console.log(this.departmentdata);
  $('.deleteRequest').modal('show');
}

deletedepartments(){
  $('.deleteRequest').modal('hide');
  this.resetErrors();

  this.adddepartmentService.deletedepartment(this.departmentdata)
    .subscribe(
      (res: Adddepartment[]) => {
        this.adddepartments1 = res;
        if(this.adddepartments1.output==true)
      {
        $('.successmechPopup').modal('show');
       // this.router.navigate(["/main/dashboard"]);
      }
      this.gettodolist();
      },
      (err) => this.error = err
    );
}
private resetErrors(){
  this.success = '';
  this.error   = '';
}

}
