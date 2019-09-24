import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addlocation  from '../addlocation/addlocation';
import { AddlocationService } from '../addlocation/addlocation.service';
declare var $ : any;
@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.css']
})
export class EditlocationComponent implements OnInit {
  addlocations: Addlocation[];
  addlocations1:any;
  error = '';
  success = '';
user={
  name :""
}

id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addlocationService: AddlocationService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addlocationService.fetchAll(+id).subscribe(
      (res: Addlocation[]) => {
        this.addlocations = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatelocation(name,id) {
    this.resetErrors();
    console.log(name, id);
    this.addlocationService.update({ name: name.value, id: +id })
      .subscribe(
        (res) => {
          this.addlocations1    = res;
          if(this.addlocations1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }
redirect(){
  this.router.navigate(["/main/master/location"]);
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
