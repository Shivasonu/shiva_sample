import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addtax from '../addtax/addtax';
import { AddtaxService } from '../addtax/addtax.service';
declare var $:any;
@Component({
  selector: 'app-edittax',
  templateUrl: './edittax.component.html',
  styleUrls: ['./edittax.component.css']
})
export class EdittaxComponent implements OnInit {
  addtaxs: Addtax[];
  addtaxs1:any;
  error = '';
  success = '';
user={
  name :"",
  percent:""
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addtaxService: AddtaxService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addtaxService.fetchAll(+id).subscribe(
      (res: Addtax[]) => {
        this.addtaxs = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatetax(name,percent,id) {
    this.resetErrors();
    console.log(name,percent, id);
    this.addtaxService.update({ name: name.value,percent:percent.value, id: +id })
      .subscribe(
        (res) => {
          this.addtaxs1    = res;
          if(this.addtaxs1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/master/tax"]);
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
