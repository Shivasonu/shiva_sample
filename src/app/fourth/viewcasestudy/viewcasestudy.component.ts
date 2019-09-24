import { Component, OnInit } from '@angular/core';
import Addcase from '../addcase/addcase';
import { AddcaseService } from '../addcase/addcase.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewcasestudy',
  templateUrl: './viewcasestudy.component.html',
  styleUrls: ['./viewcasestudy.component.css']
})
export class ViewcasestudyComponent implements OnInit {
  addcasess: Addcase[];
  error = '';
  success = '';
  p=1;
  cases={
    notes:"",
    case_category_id: "",
    result:"",
    title:""
  }
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addcaseService: AddcaseService) { }
 
  fetchtodolist(id: string | number): void {
    this.addcaseService.fetchAll(+id).subscribe(
      (res: Addcase[]) => {
        this.addcasess = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

}
