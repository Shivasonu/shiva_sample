import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addcasestages  from '../addcasestages/addcasestages';
import { AddcasestagesService } from '../addcasestages/addcasestages.service';
declare var $:any;
@Component({
  selector: 'app-editcasestages',
  templateUrl: './editcasestages.component.html',
  styleUrls: ['./editcasestages.component.css']
})
export class EditcasestagesComponent implements OnInit {
  addcasestagess: Addcasestages[];
  addcasestagess1:any;
  error = '';
  success = '';
user={
  name :""
}

id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addcasestagesService: AddcasestagesService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addcasestagesService.fetchAll(+id).subscribe(
      (res: Addcasestages[]) => {
        this.addcasestagess = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatecasestages(name,id) {
    this.resetErrors();
    this.addcasestagesService.update({ name: name.value, id: +id })
      .subscribe(
        (res) => {
          this.addcasestagess1   = res;
          if(this.addcasestagess1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }

redirect(){
  this.router.navigate(["/main/master/case-stages"]);
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
