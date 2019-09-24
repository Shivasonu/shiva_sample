import { Component, OnInit } from '@angular/core';
import Addtasks from './addtasks';
import { AddtasksService } from './addtasks.service';
import { Router } from '@angular/router';
import Addcase from 'src/app/third/addcases/addcase';
import { AddcaseService } from 'src/app/third/addcases/addcase.service';
import Addemployee from 'src/app/second/employees/addemployees/addemployees';
import { AddemployeesService } from 'src/app/second/employees/addemployees/addemployees.service';
declare var $: any;
@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {
  addtask: any;
  addcases: Addcase[];
  addemployee:Addemployee[];
  roleid;
  tasks={
    name:"",
    priority:"",
    due_date:"",
    case_id:"",
    employee_id:"",
    progress:"",
    description:"",
    created_by:""
  }
  error = '';
  success = '';
  constructor(private addtaskservice: AddtasksService, private router: Router,private addemployeeservice: AddemployeesService, private addcaseservice: AddcaseService) { }
  addtasks(tasks: Addtasks) {
    
    // console.log(tasks);
    this.addtaskservice.storetask(tasks)
      .subscribe(
        (res: Addtasks[]) => {
          // Update the list of to do list
          
          this.addtask = res;
          if(this.addtask.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => {
          return this.error = err;
        }
      );
  }

  redirect(){
    this.router.navigate(["/main/tasks/alltasks"]);
  }
  

  getcases(): void {
    this.addcaseservice.getcasename().subscribe(data=> {
        this.addcases = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getemployee():void{
    this.addemployeeservice.getemployeenames().subscribe(data=>{
      this.addemployee =data;
    },
    (err)=>{
      this.error=err;
    })
  }


  ngOnInit() {
    this.roleid = sessionStorage.getItem('userId');
    this.tasks.created_by=sessionStorage.getItem("userId");
    // console.log(this.tasks.created_by)
    this.getemployee();
    this.getcases();
  }

}