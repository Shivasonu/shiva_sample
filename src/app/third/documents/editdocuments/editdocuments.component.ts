import { Component, OnInit } from '@angular/core';
import Addddocuments from '../adddocuments/adddocuments';
import { AdddocumentService } from '../adddocuments/adddocuments.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-editdocuments',
  templateUrl: './editdocuments.component.html',
  styleUrls: ['./editdocuments.component.css']
})
export class EditdocumentsComponent implements OnInit {
  adddocument:Addddocuments;
  user={
    title:"",
    is_case:"",
    case_id:"",
  }
  error = '';
  success = '';
  newcase:any={}
  adddocuments1:any;
  addcases1:any;
  private sub: any;
  id: number;
  constructor(private route: ActivatedRoute,private router: Router, private adddocumentservice: AdddocumentService) { }

  

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

  fetchtodolist(id: string | number): void {
    this.adddocumentservice.editAll(+id).subscribe(
      (res) => {
        this.addcases1 = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatecases(title,is_case,case_id, id) {
    console.log(title,is_case,case_id,id);
    this.resetErrors();
    this.adddocumentservice.update({ title:title.value, is_case:is_case.value,  case_id:case_id.value, id: +id })
      .subscribe(
        (res) => {
          this.addcases1    = res;
          if(this.addcases1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
   this.changecase(this.user.is_case);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

  
}
