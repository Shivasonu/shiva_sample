import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Addcourt from './addcourt';
import { AddcourtService } from './addcourt.service';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-addcourt',
  templateUrl: './addcourt.component.html',
  styleUrls: ['./addcourt.component.css']
})
export class AddcourtComponent implements OnInit {
  myForm: FormGroup;
  addcourts: Addcourt[];
  addcourts1:any;
  locations:Addcourt[];
  court_category:Addcourt[];
  error = '';
  success = '';
  court={
    name:"",
    location_id:"",
    court_category_id:"",
    description:""
  }

  constructor(private addcourtservice: AddcourtService, private router: Router, private fb: FormBuilder) { }

  addtodolist(court: Addcourt) {
    this.addcourtservice.store(court)
      .subscribe(
        (res: Addcourt[]) => {
          // Update the list of to do list
          this.addcourts1 = res;
          console.log(this.addcourts1.output);
          if(this.addcourts1.output==true)
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
    this.router.navigate(["/main/master/court"]);
  }

  gettodoloclist(): void {
    this.addcourtservice.getLocation().subscribe(
      (res: Addcourt[]) => {
        this.locations = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodocourtlist(): void {
    this.addcourtservice.getcourt_cate().subscribe(
      (res: Addcourt[]) => {
        this.court_category = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnInit() {
    this.gettodoloclist();
    this.gettodocourtlist();
  }


}
