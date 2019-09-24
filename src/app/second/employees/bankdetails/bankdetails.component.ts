import { Component, OnInit } from '@angular/core';
import Addbank from './addbank/addbank';
import { AddbankService } from './addbank/addbank.service';
import { ActivatedRoute, Router } from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  addbanks: Addbank[];
  addbanks1:any;
  bankdata:any;
  error = '';
  success = '';
  p=1;
user={
  accountholdername:"",
  account_number:"",
  bank_name:"",
  ifsc_code:"",
  pan_number:"",
  branch:""
}

subscribedParam = "initial value";
id: number;
private sub: any;
constructor(private route: ActivatedRoute,private addbankService: AddbankService, private router: Router, private activatedRoute: ActivatedRoute) {
  this.activatedRoute.paramMap.subscribe(params => {
    this.subscribedParam = params.get("id");
    // console.log(this.subscribedParam);
  });
}

gettodolist(id: string | number): void {
  this.addbankService.getAll(+id).subscribe(
    (res: Addbank[]) => {
      this.addbanks = res;
    },
    (err) => {
      this.error = err;
    }
  );
}

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number

    // In a real app: dispatch action to load the details here.
 });
 this.gettodolist(this.id);
}


deletebank(data: string | number) {
  this.bankdata=data;
  console.log(this.bankdata);
  $('.deleteRequest').modal('show');
}




deleteclient(){
  $('.deleteRequest').modal('hide');
  this.resetErrors();

  this.addbankService.deletebank(this.bankdata)
    .subscribe(
      (res: any) => {
        this.addbanks1 = res;
        if(this.addbanks1.output==true)
      {
        $('.successmechPopup').modal('show');
       // this.router.navigate(["/main/dashboard"]);
      }
      this.gettodolist(this.id);
      },
      (err) => this.error = err
    );
}


private resetErrors(){
  this.success = '';
  this.error   = '';
}

}
