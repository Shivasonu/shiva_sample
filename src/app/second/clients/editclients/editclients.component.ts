import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addclient  from '../addclients/addclient';
import { AddclientService } from '../addclients/addclients.service';
declare var $:any;
@Component({
  selector: 'app-editclients',
  templateUrl: './editclients.component.html',
  styleUrls: ['./editclients.component.css']
})
export class EditclientsComponent implements OnInit {
  addclients: Addclient[];
  addclients1:any;
  error = '';
  success = '';
user={
  name :"",
  phone:"",
}
client={
  name:"",
  gender:"",
  dob:"",
  email:"",
  username:"",
  password:"",
  phone:"",
  address:"",
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addclientService: AddclientService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addclientService.fetchAll(+id).subscribe(
      (res: Addclient[]) => {
        this.addclients = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateclients(name, gender, dob, email, username, password, phone, address, id) {
    this.resetErrors();
    this.addclientService.update({ name: name.value, gender:gender.value, dob:dob.value, email:email.value, username: username.value, password:password.value, phone:phone.value, address:address.value, id: +id })
      .subscribe(
        (res) => {
          this.addclients1    = res;
          if(this.addclients1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/clients"]);
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
