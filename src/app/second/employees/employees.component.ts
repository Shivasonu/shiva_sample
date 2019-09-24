import { Component, OnInit } from '@angular/core';
import Addemployees from './addemployees/addemployees';
import { AddemployeesService } from './addemployees/addemployees.service';
declare var $:any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  addemployees: Addemployees[];
  error = '';
  success = '';
  p=1;
user={
  name :"",
  user_role:"",
  stat:"",
}
searchText;
clientdata:any;
addclients1:any;
  constructor(private addemployeesService: AddemployeesService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addemployeesService.getAll().subscribe(
      (res: Addemployees[]) => {
        this.addemployees = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  // deleteemployees(id: string | number) {
  //   this.resetErrors();

  //   this.addemployeesService.deleteemployee(+id)
  //     .subscribe(
  //       (res: Addemployees[]) => {
  //         this.addemployees = res;
  //         this.success = 'Deleted successfully';
  //       },
  //       (err) => this.error = err
  //     );
  // }

  deleteemployees(data: string | number) {
    this.clientdata=data;
    console.log(this.clientdata);
    $('.deleteRequest').modal('show');
  }

  deleteclient(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addemployeesService.deleteemployee(this.clientdata)
      .subscribe(
        (res: Addemployees[]) => {
          this.addclients1 = res;
          if(this.addclients1.output==true)
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
