import { Component, OnInit } from '@angular/core';

import Add from './add/add';
import { AddService } from './add/add.service';
declare var $:any;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  searchText;
  adds: Add[];
  adds1:any;
  error = '';
  success = '';
  todolistdata:any;
  p=1;
user={
  name :"",
  description:"",
  date_time :""
}
  constructor(private addService: AddService) {
  }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addService.getAll().subscribe(
      (res: Add[]) => {
        this.adds = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteAdd(data: string | number) {
    this.todolistdata=data;
    console.log(this.todolistdata);
    $('.deleteRequest').modal('show');
  }

  deletetodolist(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addService.delete(this.todolistdata)
      .subscribe(
        (res: Add[]) => {
          this.adds1 = res;
          if(this.adds1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        this.gettodolist();
        },
        (err) => this.error = err
      );
  }

  goToview(id) {
    this.addService.navigate(['/main/todolist/view', id]);
  }

  goToedit(id) {
    this.addService.navigate(['/main/todolist/edit', id]);
  }
  
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
