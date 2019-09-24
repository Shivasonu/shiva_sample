import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Addcases from './addcase';
import { AddcaseService } from './addcase.service';
import { Router } from '@angular/router';
import Addlocation from '../../master/location/addlocation/addlocation';
import Addcourt from '../../master/court/Addcourt/addcourt';
import Addcasestages from '../../master/case-stages/addcasestages/addcasestages';
declare var $:any;


@Component({
  selector: 'app-addcases',
  templateUrl: './addcases.component.html',
  styleUrls: ['./addcases.component.css']
})
export class AddcasesComponent implements OnInit {
  myForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList1 = [];
  case_category_id = [];
  dropdownSettings1 = {};
  addcases1:any;
  addcases: Addcases[];
  addlocation: Addlocation[];
  addcourt:Addcourt[];
  addcasestages:Addcasestages[];
  addcourtcategory:any;
  error = '';
  success = '';
  cases = {
    title: "",
    case_no: "",
    client_id: "",
    location_id: "",
    court_category_id: "",
    court_id: "",
    case_category_id: "",
    case_stage_id: "",
    selectedItems: "",
    description: "",
    start_date: "",
    hearing_date: "",
    o_lawyer: "",
    fees: ""
  }
  constructor(private addcaseservice: AddcaseService, private router: Router, private fb: FormBuilder) {
    this.getactdetails();
    this.getpatentdetails();
    this.getlocationdetails();
    this.getcourtdetails();
    this.getcasestages();
    this.getcourtcategorylist();
  }

  addtodolist(cases: Addcases) {
   
    
    this.addcaseservice.storecase(cases)
      .subscribe(
        (res) => {
          // Update the list of to do list
          this.addcases1 = res;
          console.log(this.addcases1);
          if(this.addcases1.output==true)
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
    this.router.navigate(["/main/cases/allcases"]);
   }

  
  gettodolist(): void {
    this.addcaseservice.getclientnames().subscribe(
      (res: Addcases[]) => {
        this.addcases = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getlocationdetails():void {
    this.addcaseservice.getlocationdetails().subscribe(
      (res: Addcases[]) => {
        this.addlocation = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  getcourtdetails():void{
    this.addcaseservice.getcourtdetails().subscribe(
      (res: Addcases[]) => {
        this.addcourt = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getcourtcategorylist():void{
    this.addcaseservice.getcourtcategorylist().subscribe(
      (res: any[]) => {
        this.addcourtcategory = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getactdetails():void{
    this.addcaseservice.getactdetails().subscribe(
     (res: Addcases[]) => {
        this.dropdownList = res;
      },
      (err) => {
        this.error = err;
      }
    )
  }

  getpatentdetails():void{
    this.addcaseservice.getpatentdetails().subscribe(
      (res: Addcases[]) => {
         this.dropdownList1 = res;
       },
       (err) => {
         this.error = err;
       }
     )
  }
  getcasestages():void{
    this.addcaseservice.getcasestages().subscribe(
      (res: Addcases[]) => {
         this.addcasestages=res;
       },
       (err) => {
         this.error = err;
       }
     )
  }
  ngOnInit() {
    this.gettodolist();
   // this.dropdownList = [{"item_id":"1","item_text":"Parliamentary"},{"item_id":"2","item_text":"Land Act"},{"item_id":"3","item_text":"Criminal act"},{"item_id":"4","item_text":"Contract act"},{"item_id":"5","item_text":"GST"}];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      require:true
    };

    //this.dropdownList1 = [{ item_id: 1, item_text: 'Human Rights' },{ item_id: 2, item_text: 'Crime' },{ item_id: 3, item_text: 'Contract' },];
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }

}
