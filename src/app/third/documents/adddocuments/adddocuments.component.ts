import { Component, OnInit } from '@angular/core';
import Addddocuments from './adddocuments';
import { AdddocumentService } from './adddocuments.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-adddocuments',
  templateUrl: './adddocuments.component.html',
  styleUrls: ['./adddocuments.component.css']
})
export class AdddocumentsComponent implements OnInit {
  adddocument:Addddocuments;
user={
  name:"",
  is_case:"",
  case_id:"",
}
error = '';
success = '';
newcase:any={}
adddocuments1:any;
addcases1:any;
  constructor(private router: Router, private adddocumentservice: AdddocumentService,) { }

  adddocuments(document: Addddocuments) {
   
    console.log(document);
    this.adddocumentservice.storedocument(document)
      .subscribe(
        (res) => {
          // Update the list of to do list
          this.addcases1 = res;
          console.log(this.addcases1);
          if(this.addcases1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => {
          return this.error = err;
        }
      );
  }

  redirect(){
    this.router.navigate(["/main/cases/documents"]);
   }


  changecase(is_case) {
    this.newcase = is_case;
    //this.dept_name = dept_name;
    console.log(is_case);
    var request= { 
      id:is_case
     }
     this.adddocumentservice.getdesignname().subscribe(data=> {
       this.adddocument = data;
       console.log(this.adddocument);
     },
     (err) => {
       this.error = err;
     }
   );
  }
  ngOnInit() {
  }


}
