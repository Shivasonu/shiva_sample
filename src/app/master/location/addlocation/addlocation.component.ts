import { Component, OnInit } from '@angular/core';
import Addlocation from './addlocation';
import { AddlocationService } from './addlocation.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  addlocations: any;
  error = '';
  success = '';
user={
  name :""
}
  constructor(private addlocationService: AddlocationService,private router: Router) { }

  addlocation(user: Addlocation) {
    console.log(user);
    this.addlocationService.store(user)
    .subscribe(
      (res: Addlocation[]) => {
        // Update the list of to do list
        this.addlocations = res;
        // Inform the user
        if(this.addlocations.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/master/location"]);
  }

  ngOnInit() {
  }

}
