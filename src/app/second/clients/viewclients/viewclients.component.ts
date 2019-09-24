import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Addclient  from '../addclients/addclient';
import { AddclientService } from '../addclients/addclients.service';
@Component({
  selector: 'app-viewclients',
  templateUrl: './viewclients.component.html',
  styleUrls: ['./viewclients.component.css']
})
export class ViewclientsComponent implements OnInit {

  addclients: Addclient[];
  error = '';
  success = '';
user={
  name :"",
  phone:"",
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addclientService: AddclientService) { }

  fetchtodolist(id: string | number): void {
    this.addclientService.fetchAll(+id).subscribe(
      (res: Addclient[]) => {
        this.addclients = res;
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
