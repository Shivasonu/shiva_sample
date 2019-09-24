import { Component, OnInit } from '@angular/core';
import { Addleaveservice } from './leavenotification.service';
import { Router } from '@angular/router';
import leavenotification from './leavenotification';


@Component({
  selector: 'app-leavenotification',
  templateUrl: './leavenotification.component.html',
  styleUrls: ['./leavenotification.component.css']
})
export class LeavenotificationComponent implements OnInit {
  addleaveserv: Addleaveservice[];
  addleaveserv1:any;
  error = '';
  success = '';
  p=1;
leave={
  date :"",
  employee:"",
  leave_type:"",
  reason:"",
  status:""
}
searchText;
  constructor(private addleaveservice :Addleaveservice) { }

  ngOnInit() {
    this.getleavenotify();
  }


  getleavenotify(): void {
    this.addleaveservice.getAll().subscribe(
      (res: Addleaveservice[]) => {
        this.addleaveserv = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
