import { Component, OnInit } from '@angular/core';
import { AddcaseService } from '../addcases/addcase.service';
import Addcases from '../addcases/addcase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allcases',
  templateUrl: './allcases.component.html',
  styleUrls: ['./allcases.component.css']
})
export class AllcasesComponent implements OnInit {

  addcases: Addcases;
  error = '';
  success = '';
  searchText="";
  p=1;
  cases = {
    title: "",
    case_no: "",
    client_id: "",
    starred_cases:""
  }
  constructor(private addcaseService: AddcaseService,private router: Router, ) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addcaseService.getAll().subscribe(
      (res: Addcases[]) => {
        this.addcases = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  
  starupdate(id: string | number) {
    this.resetErrors();

    this.addcaseService.starupdate(+id)
      .subscribe(
        (res: Addcases[]) => {
          this.addcases = res;
          this.gettodolist();
        },
        (err) => this.error = err
      );
      
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
