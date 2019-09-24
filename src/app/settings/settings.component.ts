import { Component, OnInit } from '@angular/core';
import Addappointment from './addappointment/addappointment';
import { AddappointmentService } from './addappointment/addappointment.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  addappointments: Addappointment[];
  error = '';
  success = '';
  p=1;
appointment={
  title :"",
  contact:"",
  motive:"",
  date:"",
  notes:""
}
searchText;
  constructor(private addappointmentService: AddappointmentService) { }

  ngOnInit() {
    this.getappointment();
  }
  getappointment(): void {
    this.addappointmentService.getappointmentall().subscribe(
      (res: Addappointment[]) => {
        this.addappointments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteappointmentadd(id: string | number) {
    this.resetErrors();

    this.addappointmentService.deleteappointment(+id)
      .subscribe(
        (res: Addappointment[]) => {
          this.addappointments = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
  
}
