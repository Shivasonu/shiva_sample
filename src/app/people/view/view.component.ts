import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Add  from '../add/add';
import { AddService } from '../add/add.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  adds: Add[];
  error = '';
  success = '';
user={
  name :"",
  description:"",
  date_time :""
}
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private addService: AddService) {}

  fetchtodolist(id: string | number): void {
    this.addService.fetchAll(+id).subscribe(
      (res: Add[]) => {
        this.adds = res;
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
