import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addtasks  from '../addtasks/addtasks';
import { AddtasksService } from '../addtasks/addtasks.service';
import Addcase from 'src/app/third/addcases/addcase';
import { AddcaseService } from 'src/app/third/addcases/addcase.service';
import Addemployee from 'src/app/second/employees/addemployees/addemployees';
import { AddemployeesService } from 'src/app/second/employees/addemployees/addemployees.service';
declare var $:any;
@Component({
  selector: 'app-edittasks',
  templateUrl: './edittasks.component.html',
  styleUrls: ['./edittasks.component.css']
})
export class EdittasksComponent implements OnInit {
  addtask: Addtasks[];
  addcases: Addcase[];
  addemployee:Addemployee[];
  addtask1:any;
  error = '';
  success = '';
  id: number;
  private sub: any;
  user={
    name :"",
    priority:"",
    due_date:"",
    case_id:"",
    progress:"",
    description:"",
    created_by:""
  }
  constructor(private route: ActivatedRoute, private addtaskservice: AddtasksService,private router: Router,private addemployeeservice: AddemployeesService, private addcaseservice: AddcaseService) { }
  fetchtodolist(id: string | number): void {
    this.addtaskservice.fetchAll(+id).subscribe(
      (res: Addtasks[]) => {
        this.addtask = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatetask(name, priority, due_date, case_id, employee_id, progress, description, id) {
    this.resetErrors();
  //  console.log(name, priority, due_date, case_id, employee_id, progress, description, id);
    this.addtaskservice.update({ name: name.value, priority:priority.value, due_date:due_date.value, case_id:case_id.value, employee_id:employee_id.value, progress:progress.value, description:description.value, id: +id })
      .subscribe(
        (res) => {
          this.addtask1    = res;
          if(this.addtask1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
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
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
   this.getemployee();
    this.getcases();
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
