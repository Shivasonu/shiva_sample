import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addcontact  from '../addcontact/addcontact';
import { AddcontactService } from '../addcontact/addcontact.service';
declare var $:any;
@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  addcontacts: Addcontact[];
  addcontacts1:any;
  error = '';
  success = '';
contact={
  name :"",
  email:"",
  phone :"",
  address:""
}
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private addcontactService: AddcontactService,private router: Router) { }
  fetchcontact(id: string | number): void {
    this.addcontactService.fetchcontactAll(+id).subscribe(
      (res: Addcontact[]) => {
        this.addcontacts = res;
      },
      (err) => {
        this.error = err;
      }
    );
    }
    updatecontact(name, email, phone, address, id) {
      this.resetErrors();
      console.log(name,  email, phone, address, id);
      this.addcontactService.update({ name: name.value, email:email.value, phone: phone.value, address:address.value, id: +id })
        .subscribe(
          (res) => {
            this.addcontacts1    = res;
            if(this.addcontacts1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
            
          },
          (err) => this.error = err
        );
    }

    redirect(){
      this.router.navigate(["/main/contacts"]);
    }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchcontact(this.id);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }  

}
