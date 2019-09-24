import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Adddepartments  from '../adddepartments/adddepartments';
import { AdddepartmentService } from '../adddepartments/adddepartments.service';


@Component({
  selector: 'app-viewdepartments',
  templateUrl: './viewdepartments.component.html',
  styleUrls: ['./viewdepartments.component.css']
})
export class ViewdepartmentsComponent implements OnInit {
  adddepartments: Adddepartments[];
  error = '';
  success = '';
user={
  id:"",
  dept_name:"",
  dept_description:"",
  designations:""
}
id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private adddepartmentService: AdddepartmentService) { }

  fetchtodolist(id: string | number): void {
    this.adddepartmentService.fetchAll(+id).subscribe(
      (res: Adddepartments[]) => {
        this.adddepartments = res;
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
