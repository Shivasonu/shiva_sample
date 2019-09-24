import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Addtask from '../addtasks/addtasks';
import { AddtasksService } from '../addtasks/addtasks.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-commenttasks',
  templateUrl: './commenttasks.component.html',
  styleUrls: ['./commenttasks.component.css']
})
export class CommenttasksComponent implements OnInit {
  addtask:Addtask[];
  addtask1:Addtask[];
  error = '';
  success = '';
  taskmessage={
    message:"",
    task_id:"",
    userId:""
  }
  
  id: number;
  private sub: any;
  
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private addtaskservice: AddtasksService) { }

  addmessage(message: Addtask) {
    
     console.log(message);
    this.addtaskservice.storetaskmessage(message)
      .subscribe(
        (res: Addtask[]) => {
          this.addtask = res;

          // Inform the user
          this.success = 'Added successfully';
        },
        (err) => {
          return this.error = err;
        }
      );
      this.fetchtodolist(this.id);
      this.taskmessage.message="";
  }

  fetchtodolist(id: string | number): void {
    this.addtaskservice.fetchtaskmessage(+id).subscribe(
      (res: Addtask[]) => {
        this.addtask = res;
        
      },
      (err) => {
        this.error = err;
      }
    );
  }
  fetchtodolist1(id: string | number): void {
    this.addtaskservice.fetchtaskmessage1(+id).subscribe(
      (res: Addtask[]) => {
        this.addtask1 = res;
        
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.taskmessage.task_id=String(this.id);
      this.taskmessage.userId = this.cookieService.get("userId");
      // console.log();
      this.fetchtodolist(this.id);
      this.fetchtodolist1(this.id);
      // In a real app: dispatch action to load the details here.
   });
  }
}
