import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addact from '../addact/addact';
import { AddactService } from '../addact/addact.service';
declare var $:any;
@Component({
  selector: 'app-editact',
  templateUrl: './editact.component.html',
  styleUrls: ['./editact.component.css']
})
export class EditactComponent implements OnInit {
  addacts: Addact[];
  addacts1:any;
  error = '';
  success = '';
user={
  name :"",
  description:""
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addactService: AddactService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addactService.fetchAll(+id).subscribe(
      (res: Addact[]) => {
        this.addacts = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateact(name,description,id) {
    this.resetErrors();
    console.log(name,description, id);
    this.addactService.update({ name: name.value,description:description.value, id: +id })
      .subscribe(
        (res) => {
          this.addacts1    = res;
          if(this.addacts1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/master/act"]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
  }
  

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }


}
