import { Component, OnInit } from '@angular/core';
import Addnotice from './addnotice/addnotice';
import { AddnoticeService } from './addnotice/addnotice.service';
declare var $:any;

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  addnotices: Addnotice[];
  addnotice1:any;
  error = '';
  success = '';
  searchText="";
  noticedata:any;
  p=1;
user={
  title :"",
  description:"",
  date_time:"",
}
  constructor(private addnoticeService: AddnoticeService) { }

  ngOnInit() {
    this.gettodolist();
  }

  gettodolist(): void {
    this.addnoticeService.getAll().subscribe(
      (res: Addnotice[]) => {
        this.addnotices = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }


  deletenotice(data: string | number) {
    this.noticedata=data;
    console.log(this.noticedata);
    $('.deleteRequest').modal('show');
  }

  deletenoticedata(){
    $('.deleteRequest').modal('hide');
    this.resetErrors();

    this.addnoticeService.deletenotice(this.noticedata)
      .subscribe(
        (res: Addnotice[]) => {
          this.addnotice1 = res;
          if(this.addnotice1.output==true)
        {
          $('.successmechPopup').modal('show');
         // this.router.navigate(["/main/dashboard"]);
        }
        this.gettodolist();
        },
        (err) => this.error = err
      );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
