import { Component, OnInit } from '@angular/core';
import Addcasecategory from './addcasecategory/addcasecategory';
import { AddcasecategoryService } from './addcasecategory/addcasecategory.service';
declare var $:any;

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  Addcasecategory:Addcasecategory[];
  addcasecategorys:any;
  casedata:any;
  error = '';
  success = '';
  p=1;
  searchText="";
user={
  name :"",
  category_name:""
}
  constructor(private addcasecategoryservice: AddcasecategoryService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addcasecategoryservice.getAll().subscribe(
      (res: Addcasecategory[]) => {
        this.addcasecategorys = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletecasecat(data: string | number) {
    this.casedata=data;
    $('.deleteRequest').modal('show');
  }

  deletecasedata(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addcasecategoryservice.deletecasecategory(this.casedata)
      .subscribe(
        (res: any) => {
          this.addcasecategorys = res;
          if(this.addcasecategorys.output==true)
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
