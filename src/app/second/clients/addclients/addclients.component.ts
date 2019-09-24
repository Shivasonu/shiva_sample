import { Component, OnInit } from '@angular/core';
import Addclient from './addclient';
import { AddclientService } from './addclients.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addclients',
  templateUrl: './addclients.component.html',
  styleUrls: ['./addclients.component.css']
})
export class AddclientsComponent implements OnInit {
  addclients: Addclient[];
  addclientes: any;
  error = '';
  success = '';
  selectedfile;
  userEmp:any={}
user={
  name :"",
  img:"",
  gender:"",
  dob:"",
  email:"",
  username:"",
  password:"",
  confirm:"",
  phone:"",
  address:""
}
  constructor(private addclientService: AddclientService,private router: Router) { }

  getFileDetails(e) {
    console.log(e.target.files);
    this.selectedfile = <File>e.target.files[0];
    console.log(this.selectedfile);
  }
  

  addclient(user: Addclient) {
  //   console.log(this.selectedfile.name);
    this.userEmp = user;
  //  console.log(this.userEmp);
    const fd = new FormData();
     fd.append("userEmp", JSON.stringify(user));
     if(this.selectedfile!=undefined){
      fd.append('filename', this.selectedfile,this.selectedfile.name);
     }
      console.log(fd); 
    this.addclientService.store(fd)
    .subscribe(
      (res) => {
        // Update the list of to do list
        this.addclientes = res;
        // console.log(this.addclientes.output);
        if(this.addclientes.output==true)
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
  }

}
