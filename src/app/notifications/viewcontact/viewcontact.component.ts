import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Addcontact  from '../addcontact/addcontact';
import { AddcontactService } from '../addcontact/addcontact.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  addcontacts: Addcontact[];
  error = '';
  success = '';
contact={
  name :"",
  email:"",
  phone :"",
  address:""
}
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private addService: AddcontactService) { }

  fetchcontact(id: string | number): void {
    this.addService.fetchcontactAll(+id).subscribe(
      (res: Addcontact[]) => {
        this.addcontacts = res;
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
    this.fetchcontact(this.id);

  }

}

