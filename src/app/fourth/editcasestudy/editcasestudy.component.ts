import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addcase  from '../addcase/addcase';
import { AddcaseService } from '../addcase/addcase.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
declare var $:any;
@Component({
  selector: 'app-editcasestudy',
  templateUrl: './editcasestudy.component.html',
  styleUrls: ['./editcasestudy.component.css']
})
export class EditcasestudyComponent implements OnInit {
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
id: number;
  private sub: any;
  constructor(private router: Router, private addcaseService : AddcaseService, private route: ActivatedRoute,) { 
    this.getcasecategory();
  }
  fetchtodolist(id: string | number): void {
    this.addcaseService.fetchAll(+id).subscribe(
      (res: Addcase[]) => {
        this.addcasess = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateclients(title, case_category_id, notes, result,  id) {
    this.resetErrors();
    console.log(title, case_category_id, notes, result,  id);
    this.addcaseService.update({ title: title.value, case_category_id:case_category_id.value, notes:notes.value, result:result.value, id: +id })
      .subscribe(
        (res) => {
          this.addcasess1    = res;
          if(this.addcasess1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/casestudy"]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      
      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  //  this.dropdownList1 = [
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

  getcasecategory(): void {
    this.addcaseService.getcasecategoryname().subscribe(data=> {
      this.dropdownList1 = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
