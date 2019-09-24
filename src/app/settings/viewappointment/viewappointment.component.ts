import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Addappointment  from '../addappointment/addappointment';
import { AddappointmentService } from '../addappointment/addappointment.service';
@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  addappointments: Addappointment[];
  error = '';
  success = '';
appointment={
  title :"",
  contact:"",
  motive :"",
  date_time:"",
  notes:""
}
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addappointment: AddappointmentService) { }

  fetchappointment(id: string | number): void {
    this.addappointment.fetchappointmentAll(+id).subscribe(
      (res: Addappointment[]) => {
        this.addappointments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    this.fetchappointment(this.id);

  }

}
