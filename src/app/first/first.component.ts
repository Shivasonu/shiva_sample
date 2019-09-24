import { Component, OnInit, ViewChild  } from '@angular/core';
import { FirstService } from './first.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare var $: any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  userroll:any;
  name:any;
  public loading = false;
  getUrl:any;
  userName:any;
  profileImage:any;
  dashboards:any;
  casesall:any;
  list:any;
  noticelist:any;
  edited:any;
  edited1:any;
  error = '';
  success = '';
  p=1;
user={
  no_clients :"",
  no_cases  :"",
  no_starred_cases   :"",
  no_archived_cases   :"",
  no_employees   :"",
  no_mytasks:""
}
countava:any;
markin={
  notes:"",
  userId:""
}
markout={
  notesmarkout:"",
  userId:""
}

leaves={
  date:"",
  leave_id:"",
  reason:"",
  userId:""
}
leavelist:any;
addapplyleave:any;
  constructor(private firstService: FirstService,private cookieService: CookieService,private router: Router,) {
    this.gettodaylistall();
    this.gettodaycasesall();
    this. getnotices();
    
   }

  addmarkin(markin : any){
    console.log(markin);
    this.firstService.addmarkin(markin)
      .subscribe(
        (res: any) => {
          // Update the list of to do list
          this.addmarkin = res;
          console.log(this.addmarkin['data']['availability']);

          // Reset the form
          // this.router.navigate(["/main/dashboard"]);
          $('#mark_in').modal('hide');
          this.edited = false;
          this.edited1 = true;
          this.markin.notes='';
          },
        (err) => {
          return this.error = err;
        }
        
      );
  }

  addmarkout(markout : any){
    console.log(markout);
    this.firstService.addmarkout(markout)
      .subscribe(
        (res: any) => {
          // Update the list of to do list
          this.markout = res;
          console.log(this.markout['data']['availability']);

          // Reset the form
          // this.router.navigate(["/main/dashboard"]);
          $('#mark_out').modal('hide');
          this.edited = true;
          this.edited1 = false;
          this.markin.notes='';
          },
        (err) => {
          return this.error = err;
        }
        
      );
  }
    
  applyleaves(leaves){
    this.firstService.applyleave(leaves).subscribe(
      (res: any[]) => {
        this.addapplyleave = res;
        $('#apply_leave').modal('hide');
      },
      (err) => {
        this.error = err;
      }
    );
    this.leaves.date='';
    this.leaves.leave_id='';
    this.leaves.reason='';
    
  }

  getleavelist():void{
    this.firstService.getleavelist().subscribe(
      (res: any[]) => {
        this.leavelist = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnInit() {
    
    
    this.markin.userId=this.cookieService.get('userId');
    this.markout.userId=this.cookieService.get('userId');
    this.leaves.userId=this.cookieService.get('userId');
    this.userroll = this.cookieService.get('userId');
    this.userName = this.cookieService.get("fullname");
    this.profileImage = this.cookieService.get('profileImage');
    this.fetchavailability(this.userroll );
    this.gettodolist(this.userroll);
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
		
			events: 'http://localhost/advocate_api/appointment/allappointments',
      eventClick:function(event)
    {
     alert(event.color);
     this.router.navigate(['/main/hrmange/clients']);
    }
    });
    
    this.getleavelist();
    
  }

 
  gettodolist(id: string | number): void {
    this.firstService.getAll(+id).subscribe(
      (res: any) => {
        this.dashboards = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodaycasesall(): void {
    this.firstService.getcases().subscribe(
      (res: any) => {
        this.casesall = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodaylistall(): void {
    this.firstService.getlist().subscribe(
      (res: any) => {
        this.list = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getnotices():void{
    this.firstService.getnoticelist().subscribe(
      (res: any) => {
        this.noticelist = res;
        console.log(this.noticelist);
      },
      (err) => {
        this.error = err;
      }
    );
  }
 
  fetchavailability(id: string | number): void {
    this.firstService.fetchava(+id).subscribe(
      (res: any) => {
        this.countava = res;
        console.log(this.countava[0]['countava']);
        if(this.countava[0]['countava']==0){
          this.edited = true;
    this.edited1 = false;
        }
        else{
          this.edited = false;
    this.edited1 = true;
        }
      },
      (err) => {
        this.error = err;
      }
    );
  }
}