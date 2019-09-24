import { Component, OnInit } from '@angular/core';
import Addcourt from './Addcourt/addcourt';
import { AddcourtService } from './addcourt/addcourt.service';
declare var $:any;
@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.css']
})
export class CourtComponent implements OnInit {
  addcourts: Addcourt[];
  locations:Addcourt[];
  court_category:Addcourt[];
  addcourts1:any;
  courtdata:any;
  error = '';
  success = '';
  searchText="";
  p=1;
  court={
    name:"",
    location_id:"",
    court_category_id:"",
    description:""
  }
  constructor(private addcourtService: AddcourtService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addcourtService.getAll().subscribe(
      (res: Addcourt[]) => {
        this.addcourts = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  deletecourt(data: string | number) {
    this.courtdata=data;
    $('.deleteRequest').modal('show');
  }

  deletecourtdata(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addcourtService.deletecourt(this.courtdata)
      .subscribe(
        (res: Addcourt[]) => {
          this.addcourts1 = res;
          if(this.addcourts1.output==true)
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
