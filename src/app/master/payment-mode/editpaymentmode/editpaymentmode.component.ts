import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addpaymentmode  from '../addpaymentmode/addpaymentmode';
import { AddpaymentmodeService } from '../addpaymentmode/addpaymentmode.service';
declare var $:any;
@Component({
  selector: 'app-editpaymentmode',
  templateUrl: './editpaymentmode.component.html',
  styleUrls: ['./editpaymentmode.component.css']
})
export class EditpaymentmodeComponent implements OnInit {
  addpaymentmodes: Addpaymentmode[];
  addpaymentmodes1:any;
  error = '';
  success = '';
user={
  name :""
}

id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addpaymentmodeService: AddpaymentmodeService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addpaymentmodeService.fetchAll(+id).subscribe(
      (res: Addpaymentmode[]) => {
        this.addpaymentmodes = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatepaymentmode(name,id) {
    this.resetErrors();
    console.log(name, id);
    this.addpaymentmodeService.update({ name: name.value, id: +id })
      .subscribe(
        (res) => {
          this.addpaymentmodes1    = res;
         if(this.addpaymentmodes1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/master/payment-mode"]);
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
