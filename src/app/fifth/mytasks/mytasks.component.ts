import { Component, OnInit } from '@angular/core';
import Addtask from '../alltasks/addtasks/addtasks';
import { AddtasksService } from '../alltasks/addtasks/addtasks.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {

  addtask:Addtask[];
  error = '';
  success = '';
  searchText="";
  p=1;
user={
  name :"",
  priority:"",
  due_date:"",
  case_id:"",
  progress:"",
  description:"",
  created_by:"",
  userId:""
}

id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private addtaskservice: AddtasksService) { }
  fetchtodolist(id: string | number): void {
    this.addtaskservice.fetchbyuser(+id).subscribe(
      (res: Addtask[]) => {
        this.addtask = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnInit() {
    this.user.userId = this.cookieService.get("userId");
   this.fetchtodolist(this.user.userId);
  }

}