import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Adddepartments from '../adddepartments/adddepartments';
import { AdddepartmentService } from '../adddepartments/adddepartments.service';
declare var $:any;
@Component({
  selector: 'app-editdepartments',
  templateUrl: './editdepartments.component.html',
  styleUrls: ['./editdepartments.component.css']
})
export class EditdepartmentsComponent implements OnInit {
  adddepartments: Adddepartments[];
  adddepartments1:any;
  error = '';
  success = '';
  dept = {
    name: '',
    description: '',
    designations: []
  }
  designationsList = [];
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private adddepartmentService: AdddepartmentService, private router: Router) { }
  fetchtodolist(id: string | number): void {
    this.adddepartmentService.fetchAll(+id).subscribe(
      (res: AdddepartmentService[]) => {
        this.adddepartments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  addMoreDesignations(desg: String): void {
    this.designationsList.push(desg);
    this.dept.designations = [];
  }

  sliceDept(index) {
    this.designationsList.splice(index, 1);
  }

  updatedepartment(name, description, designations, id) {
    this.resetErrors();
    console.log(name, description, designations, id);
    this.adddepartmentService.update({ name: name.value, description: description.value, designations: designations.value, id: +id })
      .subscribe(
        (res) => {
          this.adddepartments1 = res;
          console.log(this.adddepartments1.output);
          if(this.adddepartments1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/departments"]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.fetchtodolist(this.id);
  }

  private resetErrors() {
    this.success = '';
    this.error = '';
  }

}
