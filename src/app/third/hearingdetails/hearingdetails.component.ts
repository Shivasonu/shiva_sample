import { Component, OnInit } from '@angular/core';
import Addcases from '../addcases/addcase';
import { AddcaseService } from '../addcases/addcase.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hearingdetails',
  templateUrl: './hearingdetails.component.html',
  styleUrls: ['./hearingdetails.component.css']
})
export class HearingdetailsComponent implements OnInit {
  addcases: Addcases[];
  error = '';
  success = '';
  user={
    nextdate:"",
    lastdate:"",
    notes:"",
    case_id:""
  }
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addcaseService: AddcaseService) { }

  fetchtodolist(id: string | number): void {
    this.addcaseService.fetchhearingdetails(+id).subscribe(
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
console.log(this.id);
      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }

}
