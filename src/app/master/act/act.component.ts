import { Component, OnInit } from '@angular/core';
import Addact from './addact/addact';
import { AddactService } from './addact/addact.service';
declare var $:any;
@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ActComponent implements OnInit {
  addacts: Addact[];
  addacts1:any;
  actdata:any;
  error = '';
  success = '';
  p=1;
  searchText="";
user={
  name :"",
  description:""
}
  constructor(private addactService: AddactService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addactService.getAll().subscribe(
      (res: Addact[]) => {
        this.addacts = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteact(data: string | number) {
    this.actdata=data;
    $('.deleteRequest').modal('show');
  }

  deleteactdata(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addactService.deleteact(this.actdata)
      .subscribe(
        (res: Addact[]) => {
          this.addacts1 = res;
          if(this.addacts1.output==true)
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
