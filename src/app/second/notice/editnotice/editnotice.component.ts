import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addnotice  from '../Addnotice/addnotice';
import { AddnoticeService } from '../addnotice/addnotice.service';
declare var $:any;
@Component({
  selector: 'app-editnotice',
  templateUrl: './editnotice.component.html',
  styleUrls: ['./editnotice.component.css']
})
export class EditnoticeComponent implements OnInit {
  addnotices: Addnotice[];
  addnotices1:any;
  error = '';
  success = '';
user={
  title :"",
  date_time:"",
}
client={
  title:"",
  description:"",
  date_time:"",
}
id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addnoticeService: AddnoticeService,private router: Router) { }
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

  updatenotice(title, description, date_time, id) {
    this.resetErrors();
    console.log(title, description, date_time, id);
    this.addnoticeService.update({ title: title.value, description:description.value, date_time:date_time.value, id: +id })
      .subscribe(
        (res) => {
          this.addnotices1    = res;
          if(this.addnotices1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }

  redirect(){
    this.router.navigate(["/main/hrmange/notice"]);
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
