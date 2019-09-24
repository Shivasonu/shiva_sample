import { Component, OnInit } from '@angular/core';
import Addcontact from './addcontact/addcontact';
import { AddcontactService } from './addcontact/addcontact.service';
declare var $:any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  addcontacts: Addcontact[];
  addcontacts1:any;
  error = '';
  success = '';
  contactdata:any;
  p=1;
contacts={
  name :"",
  eamil:"",
  phone :"",
  address:""
}
searchText;
  constructor(private addcontactService: AddcontactService) { }

  ngOnInit() {
    this.getcontact();
  }

  getcontact(): void {
    this.addcontactService.getcontactAll().subscribe(
      (res: Addcontact[]) => {
        this.addcontacts = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletecontactAdd(data: string | number) {
    this.contactdata=data;
    console.log(this.contactdata);
    $('.deleteRequest').modal('show');
  }

  deletecontact(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addcontactService.deletecontact(this.contactdata)
      .subscribe(
        (res: Addcontact[]) => {
          this.addcontacts1 = res;
          if(this.addcontacts1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        this.getcontact();
        },
        (err) => this.error = err
      );
  }

  goToview(id) {
    this.addcontactService.navigate(['/main/contacts/view', id]);
  }


  private resetErrors(){
    this.success = '';
    this.error   = '';
  }


}
