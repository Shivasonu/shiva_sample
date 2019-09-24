import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Addcasecategory from '../addcasecategory/addcasecategory';
import { AddcasecategoryService } from '../addcasecategory/addcasecategory.service';
declare var $:any;
@Component({
  selector: 'app-editcasecategory',
  templateUrl: './editcasecategory.component.html',
  styleUrls: ['./editcasecategory.component.css']
})
export class EditcasecategoryComponent implements OnInit {
  Addcasecategory: Addcasecategory[];
  addcasecategorys: any;
  casecategory:any;
  casedata: any;
  error = '';
  success = '';
  user = {
    name: "",
    category_name: ""
  }
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addcasecategoryservice: AddcasecategoryService, private router: Router) { 

   this.getcasecategory();
  }

  getcasecategory(): void {
    this.addcasecategoryservice.getcasecategoryname().subscribe(data=> {
        this.addcasecategorys = data;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  fetchtodolist(id: string | number): void {
    this.addcasecategoryservice.fetchAll(+id).subscribe(
      (res: Addcasecategory[]) => {
        
        this.Addcasecategory = res;
        console.log(this.Addcasecategory);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateact(name,parent_id,id) {
    this.resetErrors();
    console.log(name,parent_id, id);
    this.addcasecategoryservice.update({ name: name.value,parent_id:parent_id.value, id: +id })
      .subscribe(
        (res) => {
          this.casecategory    = res;
          if(this.casecategory.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/master/case"]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
