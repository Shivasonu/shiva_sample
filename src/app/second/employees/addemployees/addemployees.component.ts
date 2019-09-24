import { Component, OnInit } from '@angular/core';
import Addemployees from './addemployees';
import { AddemployeesService } from './addemployees.service';
import { Router } from '@angular/router';
import Adddepartments from 'src/app/second/departments/adddepartments/adddepartments';
import { AdddepartmentService } from 'src/app/second/departments/adddepartments/adddepartments.service';
declare var $: any;
@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {
  adddepartments: Adddepartments[];
  adddepartmentss: any;
  addemployees: Addemployees[];
  addemp:any;
  error = '';
  success = '';
  selectedfile;
  userEmp:any={}
  newdesig:any={}
user={
  employee_id:"",
  name:"",
  gender:"",
  dob:"",
  user_role:"",
  dept_name:"",
  designation:"",
  doj:"",
  join_salary:"",
  email:"",
  username:"",
  password:"",
  phone:"",
  address:"",
  stat:"",
  confirm:"",
}
  dept_name: any;

  constructor(private adddepartmentService: AdddepartmentService,private addemployeesService: AddemployeesService,private router: Router) { 
    this.getdepartment();
  }
  getFileDetails(e) {
   // console.log(e.target.files);
    this.selectedfile = <File>e.target.files[0];
    //console.log(this.selectedfile);
  }

  addemployee(user: Addemployees) {
    //console.log(user);
    const fd = new FormData();
     fd.append("userEmp", JSON.stringify(user));
     //console.log(userEmp);
     console.log(this.selectedfile);
     if(this.selectedfile!=undefined){
      fd.append('filename', this.selectedfile,this.selectedfile.name);
     }
      console.log(fd); 
    this.addemployeesService.store(fd)
    .subscribe(
      (res: Addemployees[]) => {
        // Update the list of to do list
        this.addemp = res;

        // Inform the user
        if(this.addemp.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/employees"]);
   }


  getdepartment(): void {
    this.adddepartmentService.getdepartmentname().subscribe(data=> {
        this.adddepartments = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  changedept(dept_name) {
    this.newdesig = "yes"
    //this.dept_name = dept_name;
    var request= { 
      id:dept_name
     }
    this.adddepartmentService.getdesignname(request).subscribe(data=> {
      this.adddepartmentss = data;
    },
    (err) => {
      this.error = err;
    }
  );
  }
  ngOnInit() {
  }

}
