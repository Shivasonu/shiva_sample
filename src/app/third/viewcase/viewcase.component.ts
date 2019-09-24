import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddcaseService } from '../addcases/addcase.service';
import Addcases from '../addcases/addcase';

@Component({
  selector: 'app-viewcase',
  templateUrl: './viewcase.component.html',
  styleUrls: ['./viewcase.component.css']
})
export class ViewcaseComponent implements OnInit {
  addcases: Addcases;
  error = '';
  searchText="";
  success = '';
  p=1;
  cases = {
    title: "",
    case_no: "",
    client_id: "",
    location_id: "",
    court_category_id: "",
    court_id: "",
    case_category_id: "",
    case_stage_id: "",
    selectedItems: "",
    description: "",
    start_date: "",
    hearing_date: "",
    o_lawyer: "",
    fees: ""
  }
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,private addcaseService: AddcaseService ) { }
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
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

}
