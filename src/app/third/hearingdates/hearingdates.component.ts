import { Component, OnInit } from '@angular/core';
import Addcases from '../addcases/addcase';
import { AddcaseService } from '../addcases/addcase.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-hearingdates',
  templateUrl: './hearingdates.component.html',
  styleUrls: ['./hearingdates.component.css']
})
export class HearingdatesComponent implements OnInit {
  addcases: Addcases[];
selectedfile;
error = '';
  success = '';
  searchText="";
  p=1;
user={
  nextdate:"",
  lastdate:"",
  notes:"",
  case_id:""
}
subscribedParam = "initial value";
id: number;
private sub: any;
  constructor( private router: Router, private activatedRoute: ActivatedRoute,private addcaseService: AddcaseService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
      this.id = +params.get("id");
       this.user.case_id=this.subscribedParam;
    });
   }
   getFileDetails(e) {
     this.selectedfile = <File>e.target.files[0];
   }

   addhearing(user: Addcases) {
    const fd = new FormData();
     fd.append("userEmp", JSON.stringify(user));
     if(this.selectedfile!=undefined){
      fd.append('filename', this.selectedfile,this.selectedfile.name);
     }
    this.addcaseService.addhearing(fd)
    .subscribe(
      (res: Addcases[]) => {
        // Update the list of to do list
        this.addcases = res;
        // Inform the user
        this.success = 'Added successfully';
        // Reset the form
        this.router.navigate(["/main/cases/allcases"]);
      },
      (err) => this.error = err
    );
  }

  fetchtodolist(id: string | number): void {
    this.addcaseService.fetchhearing(+id).subscribe(
      (res: Addcases[]) => {
        this.addcases = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deletehearing(id: string | number) {
    this.resetErrors();
    this.addcaseService.deletehear(+id)
      .subscribe(
        (res: Addcases[]) => {
          this.addcases = res;
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
