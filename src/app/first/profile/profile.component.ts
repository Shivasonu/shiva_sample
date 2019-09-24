import { Component, OnInit } from '@angular/core';
import { FirstService } from './../first.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editprofiles:any;
  editprofilees:any;
  error = '';
  success = '';
  selectedfile;
profile={
  id:"",
name:"",
img:"",
username:"",
email:"",
password:"",
confirm:""
}
userEmp:any={}
uid: any;

  private sub: any;
  constructor(private firstService: FirstService,private router: Router,private cookieService: CookieService) { }

  fetchtodolist(uid: string | number): void {
    this.firstService.fetchuser(+uid).subscribe(
      (res) => {
        this.editprofiles = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getFileDetails(e) {
    console.log(e.target.files);
    this.selectedfile = <File>e.target.files[0];
    console.log(this.selectedfile);
  }

  editprofile(profile){
    this.userEmp = profile;
    const fd = new FormData();
    fd.append("userEmp", JSON.stringify(profile));
    if(this.selectedfile!=undefined){
     fd.append('filename', this.selectedfile,this.selectedfile.name);
    }
   this.firstService.profilesave(fd)
   .subscribe(
     (res) => {
       // Update the list of to do list
       this.editprofilees = res;
//       alert(this.editprofiles.output);
      if(this.editprofilees.output==true)
      {
        $('.successmechPopup').modal('show');
      } 
     },
     (err) => this.error = err
   );
 }
  
 redirect(){
  this.router.navigate(["/main/dashboard"]);
 }

  ngOnInit() {
    this.uid = this.cookieService.get('userId');
    this.fetchtodolist(this.uid);
  }

}
