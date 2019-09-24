import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addappointment  from '../addappointment/addappointment';
import { AddappointmentService } from '../addappointment/addappointment.service';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent implements OnInit {

  addapointments:Addappointment[];
  error = '';
  success = '';
  appointment={
    title:"",
    motive:"",
    date_time:"",
    notes:"",
    name:""
  }

  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addappointmentService: AddappointmentService,private router: Router) { }

  fetchappointment(id: string | number): void {
    this.addappointmentService.fetchappointmentAll(+id).subscribe(
      (res: Addappointment[]) => {
        this.addapointments = res;
      },
      (err) => {
        this.error = err;
      }
    );
    }
    updateappointment(title,name, motive, date_time, notes,  id) {
      this.resetErrors();
      console.log(title, motive, date_time, notes, name, id);
      this.addappointmentService.update({ title: title.value,name:name.value, motive:motive.value, date_time: date_time.value, notes:notes.value, id: +id })
        .subscribe(
          (res) => {
            this.addapointments    = res;
            this.success = 'Updated successfully';
            this.router.navigate(["/main/appointments"]);
          },
          (err) => this.error = err
        );
    }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchappointment(this.id);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
