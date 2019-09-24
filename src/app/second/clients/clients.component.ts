import { Component, OnInit } from '@angular/core';

import Addclient from './addclients/addclient';
import { AddclientService } from './addclients/addclients.service';
declare var $:any;
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  addclients: Addclient[];
  addclients1:any;
  error = '';
  success = '';
  clientdata:any;
  p=1;
user={
  name :"",
  phone:"",
}
searchText;
  constructor(private addclientService: AddclientService) { }

  ngOnInit() {
    this.gettodolist();
  }
  
  gettodolist(): void {
    this.addclientService.getAll().subscribe(
      (res: Addclient[]) => {
        this.addclients = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  deleteclients(data: string | number) {
    this.clientdata=data;
    console.log(this.clientdata);
    $('.deleteRequest').modal('show');
  }

  deleteclient(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addclientService.deleteclient(this.clientdata)
      .subscribe(
        (res: Addclient[]) => {
          this.addclients1 = res;
          if(this.addclients1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        this.gettodolist();
        },
        (err) => this.error = err
      );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}