import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addemployees  from '../Addemployees/addemployees';
import { AddemployeesService } from '../addemployees/addemployees.service';
import Adddepartments from '../../departments/adddepartments/adddepartments';
import { AdddepartmentService } from '../../departments/adddepartments/adddepartments.service';
declare var $:any;
@Component({
  selector: 'app-editemployees',
  templateUrl: './editemployees.component.html',
  styleUrls: ['./editemployees.component.css']
})
export class EditemployeesComponent implements OnInit {
  addemployees: Addemployees[];
  adddepartments: Adddepartments[];
  adddepartmentss: any;
  addemp1:any;
  error = '';
  success = '';
user={
  name :"",
  phone:"",
}
client={
  name:"",
  gender:"",
  dob:"",
  user_role:"",
  departments:"",
  designation:"",
  doj:"",
  join_salary:"",
  email:"",
  username:"",
  password:"",
  phone:"",
  address:"",
  status:"",
}
userEmp:any={}
newdesig:any={}
id: number;
  private sub: any;
  constructor(private adddepartmentService: AdddepartmentService,private route: ActivatedRoute, private addemployeesService: AddemployeesService,private router: Router) { 
    this.getdepartment();
  }
  fetchtodolist(id: string | number): void {
    this.addemployeesService.fetchAll(+id).subscribe(
      (res: Addemployees[]) => {
        this.addemployees = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateemployees(name, gender, dob, user_role, departments, designation, doj, join_salary, email, username, password, phone, address, status, id) {
    this.resetErrors();
   // console.log(name, gender, dob, user_role, departments, designation, doj, join_salary, email, username, password, phone, address, status, id);
    this.addemployeesService.update({ name: name.value, gender:gender.value, dob:dob.value, user_role:user_role.value, departments:departments.value, designation:designation.value, doj:doj.value, join_salary:join_salary.value, email:email.value, username: username.value, password:password.value, phone:phone.value, address:address.value, status:status.value, id: +id })
      .subscribe(
        (res) => {
          this.addemp1    = res;
console.log(this.addemp1.output);
           if(this.addemp1.output==true)
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
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
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
}
