import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addleaves  from '../addleaves/addleaves';
import { AddleavesService } from '../addleaves/addleaves.service';
declare var $:any;
@Component({
  selector: 'app-editleaves',
  templateUrl: './editleaves.component.html',
  styleUrls: ['./editleaves.component.css']
})
export class EditleavesComponent implements OnInit {
  addleaves: Addleaves[];
  addleaves1:any;
  error = '';
  success = '';
user={
  leavetype :"",
  leaves:"",
  description:""
}
client={
  leavetype:"",
  leaves:"",
  description:"",
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addleavesService: AddleavesService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addleavesService.fetchAll(+id).subscribe(
      (res: Addleaves[]) => {
        this.addleaves = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateleaves(leavetype, leaves, description, id) {
    this.resetErrors();
    console.log(leavetype, leaves, description, id);
    this.addleavesService.update({ leavetype: leavetype.value, leaves:leaves.value, description:description.value, id: +id })
      .subscribe(
        (res) => {
          this.addleaves1    = res;
          if(this.addleaves1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/leavetype"]);
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
