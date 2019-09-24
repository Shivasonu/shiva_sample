import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Add  from '../add/add';
import { AddService } from '../add/add.service';
declare var $:any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adds: Add[];
  adds1:any;
  error = '';
  success = '';
user={
  name :"",
  description:"",
  date_time :""
}
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private addService: AddService,private router: Router) { }
  fetchtodolist(id: string | number): void {
    this.addService.fetchAll(+id).subscribe(
      (res: Add[]) => {
        this.adds = res;
      },
      (err) => {
        this.error = err;
      }
    );
    }
    updatetodolist(name, description, date_time, id) {
      this.resetErrors();
      console.log(name, description, date_time, id);
      this.addService.update({ name: name.value, description: description.value,date_time:date_time.value, id: +id })
        .subscribe(
          (res) => {
            this.adds1    = res;
            if(this.adds1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          },
          (err) => this.error = err
        );
    }

    redirect(){
      this.router.navigate(["/main/todolist"]);
    }
 
    ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }  
}
