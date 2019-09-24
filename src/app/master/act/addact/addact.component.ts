import { Component, OnInit } from '@angular/core';
import Addact from './addact';
import { AddactService } from './addact.service';
import { Router } from '@angular/router';
declare var $ : any;
@Component({
  selector: 'app-addact',
  templateUrl: './addact.component.html',
  styleUrls: ['./addact.component.css']
})
export class AddactComponent implements OnInit {
  addacts: any;
  error = '';
  success = '';
user={
  name :"",
  description:""
}
  constructor(private addactService: AddactService,private router: Router) { }

  addact(user: Addact) {
    console.log(user);
    this.addactService.store(user)
    .subscribe(
      (res: Addact[]) => {
        // Update the list of to do list
        this.addacts = res;
        if(this.addacts.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/master/act"]);
  }

  ngOnInit() {
  }

}
