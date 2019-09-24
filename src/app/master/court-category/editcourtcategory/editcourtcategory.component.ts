import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addcourtcategory  from '../addcourtcategory/addcourtcategory';
import { AddcourtcategoryService } from '../addcourtcategory/addcourtcategory.service';
declare var $:any;
@Component({
  selector: 'app-editcourtcategory',
  templateUrl: './editcourtcategory.component.html',
  styleUrls: ['./editcourtcategory.component.css']
})
export class EditcourtcategoryComponent implements OnInit {
  addcourtcategorys: Addcourtcategory[];
  addcourtcategorys1:any;
  error = '';
  success = '';
user={
  name :""
}
id: number;
private sub: any;
constructor(private route: ActivatedRoute, private addcourtcategoryService: AddcourtcategoryService,private router: Router) { }

fetchtodolist(id: string | number): void {
  this.addcourtcategoryService.fetchAll(+id).subscribe(
    (res: Addcourtcategory[]) => {
      this.addcourtcategorys = res;
    },
    (err) => {
      this.error = err;
    }
  );
}

updatecourtcategory(name,id) {
  this.resetErrors();
  this.addcourtcategoryService.update({ name: name.value, id: +id })
    .subscribe(
      (res) => {
        this.addcourtcategorys1    = res;
        if(this.addcourtcategorys1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
      },
      (err) => this.error = err
    );
}

redirect(){
  this.router.navigate(["/main/master/court-category"]);
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
