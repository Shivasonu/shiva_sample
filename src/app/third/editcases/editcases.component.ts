import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addcases  from '../addcases/addcase';
import { AddcaseService } from '../addcases/addcase.service';
import Addlocation from '../../master/location/addlocation/addlocation';
declare var $:any;
@Component({
  selector: 'app-editcases',
  templateUrl: './editcases.component.html',
  styleUrls: ['./editcases.component.css']
})
export class EditcasesComponent implements OnInit {
  addcases: Addcases[];
  addlocation: Addlocation[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList1 = [];
  case_category_id = [];
  dropdownSettings1 = {};
  addclients1:any;
  addclients11:any;
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
  addcourtcategory:any;
  addcourt:any;
  addcasestages:any;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addcaseservice: AddcaseService, private router: Router) { }
  
  fetchtodolist(id: string | number): void {
    this.addcaseservice.editAll(+id).subscribe(
      (res: Addcases[]) => {
        this.addcases = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolist(): void {
    this.addcaseservice.getclientnames().subscribe(
      (res: Addcases[]) => {
        this.addclients1 = res;
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

  updatecases(case_title, case_no, client_name, location, court_category, court,  description, filling_date, hearing_date, apposite_lawyer, total_fees, selectedItems,case_category_id,case_stage,id) {
    this.resetErrors();
    this.addcaseservice.update({ title:case_title.value, case_no:case_no.value,  client_id:client_name.value, location_id:location.value, court_category_id:court_category.value, court_id:court.value,  description:description.value, filling_date:filling_date.value, hearing_date:hearing_date.value, apposite_lawyer:apposite_lawyer.value, total_fees:total_fees.value, selectedItems:selectedItems.value,case_category_id:case_category_id.value,case_stage_id:case_stage.value, id: +id })
      .subscribe(
        (res) => {
          this.addclients11    = res;
          if(this.addclients11.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.getcasestages();
   this.getpatentdetails();
   this.getactdetails();
   this.fetchtodolist(this.id);
   this.gettodolist();
   this.getlocationdetails();
   this. getcourtcategorylist();
   this.getcourtdetails();
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

private resetErrors(){
  this.success = '';
  this.error   = '';
}
redirect(){
  this.router.navigate(["/main/cases/allcases"]);
}

 
}
