import { Component, OnInit } from '@angular/core';
import Addleaves from './Addleaves/addleaves';
import { AddleavesService } from './addleaves/addleaves.service';
declare var $:any;
@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.css']
})
export class LeavetypeComponent implements OnInit {
  addleaves: Addleaves[];
  addleaves1:any;
  leavedata:any;
  error = '';
  success = '';
  p=1;
user={
  leavetype :"",
  description:"",
  leaves:""
}
searchText;
  constructor(private addleavesService: AddleavesService) { }

  ngOnInit() {
    this.gettodolist();
  }
  
  gettodolist(): void {
    this.addleavesService.getAll().subscribe(
      (res: Addleaves[]) => {
        this.addleaves = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
 


  deleteleaves(data: string | number) {
    this.leavedata=data;
    console.log(this.leavedata);
    $('.deleteRequest').modal('show');
  }

  deleteleavepolicy(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addleavesService.deleteleaves(this.leavedata)
      .subscribe(
        (res: Addleaves[]) => {
          this.addleaves1 = res;
          if(this.addleaves1.output==true)
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
