import { Component, OnInit } from '@angular/core';
import Addcase from './addcase/addcase';
import { AddcaseService } from './addcase/addcase.service';
declare var $:any;
@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  addcasess: Addcase[];
  addcasess1:any;
  casedata:any;
  searchText;
  error = '';
  success = '';
  p=1;
  cases={
    notes:"",
    case_category_id: "",
    result:"",
    title:""
  }
  constructor(private addcaseservice: AddcaseService,) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addcaseservice.getAll().subscribe(
      (res: Addcase[]) => {
        this.addcasess = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletecase(data: string | number) {
    this.casedata=data;
    console.log(this.casedata);
    $('.deleteRequest').modal('show');
  }

  deletecasestudy() {
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addcaseservice.deletecase(this.casedata)
      .subscribe(
        (res: Addcase[]) => {
          this.addcasess1 = res;
          if(this.addcasess1.output==true)
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
