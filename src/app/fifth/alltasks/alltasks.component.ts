import { Component, OnInit } from '@angular/core';
import Addtask from './addtasks/addtasks';
import { AddtasksService } from './addtasks/addtasks.service';
declare var $:any;
@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {
  addtask:Addtask[];
  error = '';
  taskdata:any;
  addtask1:any;
  success = '';
  searchText="";
  p=1;
user={
  name :"",
  priority:"",
  due_date:"",
  case_id:"",
  progress:"",
  description:"",
  created_by:""
}

  constructor(private addtasksservice: AddtasksService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addtasksservice.getAll().subscribe(
      (res: Addtask[]) => {
        this.addtask = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }



  deletetask(data: string | number) {
    this.taskdata=data;
    console.log(this.taskdata);
    $('.deleteRequest').modal('show');
  }

  deletetaskdata(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addtasksservice.deletetask(this.taskdata)
      .subscribe(
        (res: Addtask[]) => {
          this.addtask1 = res;
          if(this.addtask1.output==true)
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
