import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Addtask from '../addtasks/addtasks';
import { AddtasksService } from '../addtasks/addtasks.service';

@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent implements OnInit {
  addtask:Addtask[];
  error = '';
  success = '';
user={
  name :"",
  priority:"",
  due_date:"",
  case_id:"",
  progress:"",
  description:"",
  created_by:""
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addtaskservice: AddtasksService) { }
  fetchtodolist(id: string | number): void {
    this.addtaskservice.fetchAll(+id).subscribe(
      (res: Addtask[]) => {
        this.addtask = res;
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
