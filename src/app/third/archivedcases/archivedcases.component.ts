import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Addcases from '../addcases/addcase';
import { AddcaseService } from '../addcases/addcase.service';
import { Router } from '@angular/router';
import Addarchivedcases from './archivedcases';
import {Addarchivedservice} from './archivedcases.service';
declare var $:any;
@Component({
  selector: 'app-archivedcases',
  templateUrl: './archivedcases.component.html',
  styleUrls: ['./archivedcases.component.css']
})
export class ArchivedcasesComponent implements OnInit {
  addcases: Addcases;
  addarchivedcase1:any;
  addarchivedcase:Addarchivedcases;
  error = '';
  success = '';
  cases = {
    close_date:"",
    notes:"",
    caseid:""
  }
  id: number;
  private sub: any;
subscribedParam = "initial value";
  constructor(private route: ActivatedRoute,private addarchivedService: Addarchivedservice,private addcaseService: AddcaseService,private router: Router,private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
      // console.log(this.subscribedParam);
      this.cases.caseid=this.subscribedParam;
    });
  }
  fetchtodolist(id: string | number): void {
    this.addcaseService.fetchAll(+id).subscribe(
      (res: Addcases[]) => {
        this.addcases = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  addarchivedcases(cases: Addarchivedcases) {
    // console.log(cases);
    
    this.addarchivedService.storearchivedcase(cases)
      .subscribe(
        (res) => {
          // Update the list of to do list
          this.addarchivedcase1 = res;

          // Inform the user
          if(this.addarchivedcase1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }

          // Reset the form
          
        },
        (err) => {
          return this.error = err;
        }
      );
  }

  redirect(){
    this.router.navigate(["/main/cases/allcases"]);
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      
      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

}
