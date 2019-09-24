import { Component, OnInit } from '@angular/core';

import Addcontact from './addcontact';
import { AddcontactService } from './addcontact.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  addcontacts: any;
  error = '';
  success = '';
  contact={
  name :"",
  phone:"",
  email :"",
  address:""
}
constructor(private addcontactService: AddcontactService,private router: Router) {
}

addtodolist(contact: Addcontact) {
  console.log(contact);

this.addcontactService.storecontact(contact)
  .subscribe(
    (res: Addcontact[]) => {
      // Update the list of to do list
      this.addcontacts = res;
      if(this.addcontacts.output==true)
      {
        $('.successmechPopup').modal('show');
       // this.router.navigate(["/main/dashboard"]);
      }
    },
    (err) => {
      return this.error = err;
    }
  );
}

redirect(){
  this.router.navigate(["/main/contacts"]);
}
  ngOnInit() {
  }

}
