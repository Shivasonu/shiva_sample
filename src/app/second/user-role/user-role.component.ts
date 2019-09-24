import { Component, OnInit } from '@angular/core';
import Adduserrole from './Adduserrole/adduserrole';
import { AdduserroleService } from './adduserrole/adduserrole.service';
declare var $:any;
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  adduserroles: Adduserrole[];
  userroledata:any;
  adduserroles1:any;
  error = '';
  success = '';
  searchText="";
  p=1;
user={
  user_type :"",
}
  constructor(private adduserroleService: AdduserroleService) { }

  ngOnInit() {
    this.gettodolist();
  }
  
  gettodolist(): void {
    this.adduserroleService.getAll().subscribe(
      (res: Adduserrole[]) => {
        this.adduserroles = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteuserrole(data: string | number) {
    this.userroledata=data;
    console.log(this.userroledata);
    $('.deleteRequest').modal('show');
  }


  deleteuserroles() {
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.adduserroleService.deleteuserrole(this.userroledata)
      .subscribe(
        (res: Adduserrole[]) => {
          this.adduserroles1 = res;
          if(this.adduserroles1.output==true)
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
