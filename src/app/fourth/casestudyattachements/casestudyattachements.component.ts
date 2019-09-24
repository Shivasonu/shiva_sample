import { Component, OnInit } from '@angular/core';
import Addcase from '../addcase/addcase';
import { AddcaseService } from '../addcase/addcase.service';
import { ActivatedRoute,Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-casestudyattachements',
  templateUrl: './casestudyattachements.component.html',
  styleUrls: ['./casestudyattachements.component.css']
})
export class CasestudyattachementsComponent implements OnInit {
  addcasess: Addcase[];
  addcasess1:any;
  addcasess2:any;
  attachdata:any;
  error = '';
  success = '';
  p=1;
  selectedfile;
  searchText="";
  user={
    title:"",
    userid:""
  }
  id: number;
private sub: any;
  subscribedParam = "initial value";
  constructor(private addcaseService: AddcaseService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
      this.id = +params.get("id");
      // console.log(this.subscribedParam);
      this.user.userid=params.get("id");
    });
  }

  getFileDetails(e) {
    // console.log(e.target.files);
     this.selectedfile = <File>e.target.files[0];
     console.log(this.selectedfile);
   }
  
   addattachment(user: Addcase) {
    console.log(user);
    const fd = new FormData();
     fd.append("userEmp", JSON.stringify(user));
    // console.log(this.selectedfile);
     if(this.selectedfile!=undefined){
      fd.append('filename', this.selectedfile,this.selectedfile.name);
     }
      console.log(fd); 
    this.addcaseService.storeattachment(fd)
    .subscribe(
      (res: Addcase[]) => {
        // Update the list of to do list
        this.addcasess1 = res;
        if(this.addcasess1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        // Reset the form
        
      },
      (err) => this.error = err
    );
  }

  redirect(){
    this.router.navigate(["/main/casestudy"]);
  }

  fetchtodolist(id: string | number): void {
    this.addcaseService.fetchattachment(+id).subscribe(
      (res: Addcase[]) => {
        this.addcasess = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteattach(data: string | number) {
    this.attachdata=data;
    console.log(this.attachdata);
    console.log(this.id);
    $('.deleteRequest').modal('show');
  }


  deleteattachment() {
    $('.deleteRequest').modal('hide');
    this.resetErrors();
    this.addcaseService.deleteattachment(this.attachdata)
      .subscribe(
        (res: Addcase[]) => {
          this.addcasess2 = res;
          if(this.addcasess2.output==true)
        {
          $('.successmechPopup1').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        
          this.fetchtodolist(this.id);
        },
        (err) => this.error = err
      );
  }

  


  
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
  ngOnInit() {
    this.fetchtodolist(this.id);
  }

}
