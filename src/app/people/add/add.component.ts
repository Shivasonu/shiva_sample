import { Component, OnInit } from '@angular/core';
import Add from './add';
import { AddService } from './add.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  adds: any;
  error = '';
  success = '';
user={
  name :"",
  description:"",
  date_time :""
}


  constructor(private addService: AddService,private router: Router) {
  }
    addtodolist(user: Add) {
         this.addService.store(user)
      .subscribe(
        (res: Add[]) => {
          // Update the list of to do list
          this.adds = res;
          if(this.adds.output==true)
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
    
  }
  
}
