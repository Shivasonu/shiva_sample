import { Component, OnInit } from '@angular/core';
import Addcontact from 'src/app/notifications/addcontact/addcontact';
import { AddcontactService } from 'src/app/notifications/addcontact/addcontact.service';
import Addappointment from './addappointment';
import { AddappointmentService } from './addappointment.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {
  addcontacts: any;
  error = '';
  success = '';
addapointments:Addappointment[];
  appointment={
    title:"",
    motive:"",
    date_time:"",
    notes:"",
    name:""
  }
  constructor(private addcontactService: AddcontactService,private addappointmentService : AddappointmentService,private router: Router) { 
    this.getcontact();
  }

  addappoint(appointment: Addappointment) {
    console.log(appointment);
    this.addappointmentService.storeappointment(appointment)
  .subscribe(
    (res: Addappointment[]) => {
      // Update the list of to do list
      this.addcontacts = res;
      if(this.addcontacts.output==true)
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
  this.router.navigate(["/main/appointments"]);
}

  getcontact(): void {
    this.addcontactService.getcontactname().subscribe(data=> {
        this.addcontacts = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnInit() {
    
  }
}
