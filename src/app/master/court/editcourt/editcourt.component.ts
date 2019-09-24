import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  Addcourt from '../addcourt/addcourt';
import { AddcourtService } from '../addcourt/addcourt.service';
declare var $:any;
@Component({
  selector: 'app-editcourt',
  templateUrl: './editcourt.component.html',
  styleUrls: ['./editcourt.component.css']
})
export class EditcourtComponent implements OnInit {
  addcourts: Addcourt[];
  addcourts1:any;
  locations:Addcourt[];
  court_categorys:Addcourt[];
  error = '';
  success = '';
  court={
    name:"",
    location_id:"",
    court_category_id:"",
    description:""
  }
 
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private addcourtService: AddcourtService,private router: Router) { }

  fetchtodolist(id: string | number): void {
    this.addcourtService.fetchAll(+id).subscribe(
      (res: Addcourt[]) => {
        this.addcourts = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updatecourt(name,location,court_category,description,id) {
    this.resetErrors();
    this.addcourtService.update({ name: name.value,location:location.value,court_category:court_category.value,description:description.value, id: +id })
      .subscribe(
        (res) => {
          this.addcourts1   = res;
          if(this.addcourts1.output==true)
          {
            $('.successmechPopup').modal('show');
           // this.router.navigate(["/main/dashboard"]);
          }
          
        },
        (err) => this.error = err
      );
  }

redirect(){
  this.router.navigate(["/main/master/court"]);
}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.fetchtodolist(this.id);
   this.gettodoloclist();
   this.gettodocourtlist();
  }
  

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

  gettodoloclist(): void {
    this.addcourtService.getLocation().subscribe(
      (res: Addcourt[]) => {
        this.locations = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodocourtlist(): void {
    this.addcourtService.getcourt_cate().subscribe(
      (res: Addcourt[]) => {
        this.court_categorys = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

 

}
