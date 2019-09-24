import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Addnotice from '../Addnotice/addnotice';
import { AddnoticeService } from '../addnotice/addnotice.service';

@Component({
  selector: 'app-viewnotice',
  templateUrl: './viewnotice.component.html',
  styleUrls: ['./viewnotice.component.css']
})
export class ViewnoticeComponent implements OnInit {
  addnotices: Addnotice[];
  error = '';
  success = '';
  user = {
    id: "",
    title: "",
    description: "",
    date_time: ""
  }

  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addnoticeService: AddnoticeService) { }

  fetchtodolist(id: string | number): void {
    this.addnoticeService.fetchAll(+id).subscribe(
      (res: Addnotice[]) => {
        this.addnotices = res;
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
