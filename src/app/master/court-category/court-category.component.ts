import { Component, OnInit } from '@angular/core';
import Addcourtcategory from './addcourtcategory/addcourtcategory';
import {AddcourtcategoryService} from './addcourtcategory/addcourtcategory.service';
declare var $:any;
@Component({
  selector: 'app-court-category',
  templateUrl: './court-category.component.html',
  styleUrls: ['./court-category.component.css']
})
export class CourtCategoryComponent implements OnInit {
  addcourtcategorys: Addcourtcategory[];
  addcourtcategorys1:any;
  courtcategorydata:any;
  error = '';
  success = '';
  searchText="";
  p=1;
user={
  name :""
}
  constructor(private addcourtcategoryService: AddcourtcategoryService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addcourtcategoryService.getAll().subscribe(
      (res: Addcourtcategory[]) => {
        this.addcourtcategorys = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletecourtcategory(data: string | number) {
    this.courtcategorydata=data;
    $('.deleteRequest').modal('show');
  }

  deletecourtcat(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addcourtcategoryService.deletecourtcategory(this.courtcategorydata)
      .subscribe(
        (res: Addcourtcategory[]) => {
          this.addcourtcategorys1 = res;
          if(this.addcourtcategorys1.output==true)
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
