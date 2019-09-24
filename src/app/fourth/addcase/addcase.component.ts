import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Addcase from './addcase';
import { AddcaseService } from './addcase.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.css']
})
export class AddcaseComponent implements OnInit {
  myForm: FormGroup;
  addcasess: Addcase[];
  addcasess1:any;
  case_category_id = [];
  dropdownList1 = [];
  dropdownSettings1 = {};
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
  }
  error = '';
  success = '';
  cases={
    notes:"",
    case_category_id: "",
    result:"",
    title:""

  }

  constructor(private addcaseservice: AddcaseService, private router: Router, private fb: FormBuilder) {  this.getcasecategory();
  }

  getcasecategory(): void {
    this.addcaseservice.getcasecategoryname().subscribe(data=> {
      this.dropdownList1 = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  addtocase(cases: Addcase) {
    console.log(cases);
    this.addcaseservice.storecase(cases)
      .subscribe(
        (res: Addcase[]) => {
          // Update the list of to do list
          this.addcasess1 = res;
          if(this.addcasess1.output==true)
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
    this.router.navigate(["/main/casestudy"]);
   }

  ngOnInit() {
    // this.dropdownList1 = [
    //   { item_id: 1, item_text: 'Human Rights' },
    //   { item_id: 2, item_text: 'Crime' },
    //   { item_id: 3, item_text: 'Contract' },
    // ];
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
