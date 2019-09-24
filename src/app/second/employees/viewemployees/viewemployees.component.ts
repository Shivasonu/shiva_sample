import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Addemployees  from '../Addemployees/addemployees';
import { AddemployeesService } from '../addemployees/addemployees.service';
@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.css']
})
export class ViewemployeesComponent implements OnInit {
  addemployees: Addemployees[];
  error = '';
  success = '';
user={
  id:"",
  name :"",
  gender:"",
  dob:"",
  user_role:"",
  departments:"",
  designation:"",
  doj:"",
  join_salary:"",
  email:"",
  username:"",
  phone:"",
  address:"",
  status:"",
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addemployeesService: AddemployeesService) { }

  fetchtodolist(id: string | number): void {
    this.addemployeesService.fetchAll(+id).subscribe(
      (res: Addemployees[]) => {
        this.addemployees = res;
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
   this.fetchtodolist(this.id);
  }

}
