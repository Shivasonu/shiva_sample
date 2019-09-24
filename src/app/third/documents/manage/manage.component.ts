import { Component, OnInit } from '@angular/core';
import Adddocuments from '../adddocuments/adddocuments';
import { AdddocumentService } from '../adddocuments/adddocuments.service';
import { ActivatedRoute,Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
adddocuments:Adddocuments[];
attachdata:any;
adddocuments1:any;
adddocuments2:any;
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
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private adddocumentservice: AdddocumentService) {
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
  
   addattachment(user: Adddocuments) {
    console.log(user);
    const fd = new FormData();
     fd.append("userEmp", JSON.stringify(user));
    // console.log(this.selectedfile);
     if(this.selectedfile!=undefined){
      fd.append('filename', this.selectedfile,this.selectedfile.name);
     }
      console.log(fd); 
    this.adddocumentservice.storedoc(fd)
    .subscribe(
      (res: Adddocuments[]) => {
        // Update the list of to do list
        this.adddocuments1 = res;
        if(this.adddocuments1.output==true)
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
    this.router.navigate(["/main/cases/documents"]);
  }

  fetchtodolist(id: string | number): void {
    this.adddocumentservice.fetchdoc(+id).subscribe(
      (res: Adddocuments[]) => {
        this.adddocuments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletedocument(data: string | number) {
    this.attachdata=data;
    console.log(this.attachdata);
    console.log(this.id);
    $('.deleteRequest').modal('show');
  }


  deleteattachment() {
    $('.deleteRequest').modal('hide');
    this.resetErrors();
    this.adddocumentservice.deletedoc(this.attachdata)
      .subscribe(
        (res: Adddocuments[]) => {
          this.adddocuments2 = res;
          if(this.adddocuments2.output==true)
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
