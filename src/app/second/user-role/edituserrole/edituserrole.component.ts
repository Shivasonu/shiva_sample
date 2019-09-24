import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Adduserrole from '../Adduserrole/adduserrole';
import { AdduserroleService } from '../adduserrole/adduserrole.service';

@Component({
  selector: 'app-edituserrole',
  templateUrl: './edituserrole.component.html',
  styleUrls: ['./edituserrole.component.css']
})
export class EdituserroleComponent implements OnInit {
  adduserroles: Adduserrole[];
  error = '';
  success = '';
user={
  user_type :"",
  description:"",
}
id: number;
private sub: any;
 constructor(private route: ActivatedRoute, private adduserroleservice: AdduserroleService,private router: Router) { }
 fetchtodolist(id: string | number): void {
  this.adduserroleservice.fetchAll(+id).subscribe(
    (res: Adduserrole[]) => {
      this.adduserroles = res;
    },
    (err) => {
      this.error = err;
    }
  );
}

updateuserrole(user_type,description, id) {
  this.resetErrors();
  console.log(user_type,description, id);
  this.adduserroleservice.update({ user_type: user_type.value, description:description.value, id: +id })
    .subscribe(
      (res) => {
        this.adduserroles    = res;
        this.success = 'Updated successfully';
        this.router.navigate(["/main/hrmange/user-role"]);
      },
      (err) => this.error = err
    );
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
