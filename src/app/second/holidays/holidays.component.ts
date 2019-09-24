import { Component, OnInit } from '@angular/core';
import { Addholidayservice } from './addholidays/addholidays.service';
declare var $:any;
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(private addholidayservice :Addholidayservice) { }
addholidaysjan :any;
addholidaysfeb :any;
addholidaysmar :any;
addholidaysapr :any;
addholidaysmay :any;
addholidaysjun :any;
addholidaysjul :any;
addholidaysaug :any;
addholidayssep :any;
addholidaysoct :any;
addholidaysnov :any;
addholidaysdec :any;
addholiday1:any;
error:"";
success:"";
holidaydata:any;
  ngOnInit() {
    this.gettodolistjan();
    this.gettodolistfeb();
    this.gettodolistmar();
    this.gettodolistapr();
    this.gettodolistmay();
    this.gettodolistjun();
    this.gettodolistjul();
    this.gettodolistaug();
    this.gettodolistsep();
    this.gettodolistoct();
    this.gettodolistnov();
    this.gettodolistdec();
  }
  gettodolistjan(): void {
    this.addholidayservice.getholidaysjan().subscribe(
      (res:any) => {
        this.addholidaysjan = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistfeb(): void {
    this.addholidayservice.getholidaysfeb().subscribe(
      (res:any) => {
        this.addholidaysfeb = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistmar(): void {
    this.addholidayservice.getholidaysmar().subscribe(
      (res:any) => {
        this.addholidaysmar = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistapr(): void {
    this.addholidayservice.getholidaysapr().subscribe(
      (res:any) => {
        this.addholidaysapr = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistmay(): void {
    this.addholidayservice.getholidaysmay().subscribe(
      (res:any) => {
        this.addholidaysmay = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistjun(): void {
    this.addholidayservice.getholidaysjun().subscribe(
      (res:any) => {
        this.addholidaysjun = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistjul(): void {
    this.addholidayservice.getholidaysjul().subscribe(
      (res:any) => {
        this.addholidaysjul = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistaug(): void {
    this.addholidayservice.getholidaysaug().subscribe(
      (res:any) => {
        this.addholidaysaug = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistsep(): void {
    this.addholidayservice.getholidayssep().subscribe(
      (res:any) => {
        this.addholidayssep = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistoct(): void {
    this.addholidayservice.getholidaysoct().subscribe(
      (res:any) => {
        this.addholidaysoct = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistnov(): void {
    this.addholidayservice.getholidaysnov().subscribe(
      (res:any) => {
        this.addholidaysnov = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  gettodolistdec(): void {
    this.addholidayservice.getholidaysdec().subscribe(
      (res:any) => {
        this.addholidaysdec = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  
  
  deleteholiday(data: string | number) {
    this.holidaydata=data;
    console.log(this.holidaydata);
    $('.deleteRequest').modal('show');
  }

  deleteholidays(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addholidayservice.delholiday(this.holidaydata)
      .subscribe(
        (res: any) => {
          this.addholiday1 = res;
          if(this.addholiday1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        this.gettodolistjan();
    this.gettodolistfeb();
    this.gettodolistmar();
    this.gettodolistapr();
    this.gettodolistmay();
    this.gettodolistjun();
    this.gettodolistjul();
    this.gettodolistaug();
    this.gettodolistsep();
    this.gettodolistoct();
    this.gettodolistnov();
    this.gettodolistdec();
        },
        (err) => this.error = err
      );
  }
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
