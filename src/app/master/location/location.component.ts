import { Component, OnInit } from '@angular/core';
import Addlocation from './addlocation/addlocation';
import { AddlocationService } from './addlocation/addlocation.service';
declare var $:any;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  addlocations: Addlocation[];
  addlocations1:any;
  locadata:any;
  error = '';
  searchText="";
  p= 1;
  success = '';
user={
  location :""
}

  constructor(private addlocationService: AddlocationService) { }

  ngOnInit() {
    this.gettodolist();
  }
  
  gettodolist(): void {
    this.addlocationService.getAll().subscribe(
      (res: Addlocation[]) => {
        this.addlocations = res;
        this.addlocations.push();
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletelocation(data: string | number) {
    this.locadata=data;
    console.log(this.locadata);
    $('.deleteRequest').modal('show');
  }

  deleteloc(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addlocationService.deletelocation(this.locadata)
      .subscribe(
        (res: Addlocation[]) => {
          this.addlocations1 = res;
          if(this.addlocations1.output==true)
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
