import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirstService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
dashboards: any;
cases:any;
list:any;noticelist:any;
countavai:any;
addcase2:any;
constructor(private http: HttpClient) { }

  getAll(id:number) {
    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/dashboard/list`, { params: params }).pipe(
      map((res) => {
        this.dashboards = res['data'];
        // console.log(res);
        return this.dashboards;
    }),
    catchError(this.handleError));
  }
  fetchava(id:number) {
    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/dashboard/countava`, { params: params }).pipe(
      map((res) => {
        this.countavai = res['data'];
        // console.log(res);
        return this.countavai;
    }),
    catchError(this.handleError));
  }

  addmarkin(addmarkin:any){
    return this.http.post(`${this.baseUrl}/dashboard/addmarkin`, { data: addmarkin })
    .pipe(map((res) => {
      //this.adds.push(res['data']);
      return res;
    }),
    catchError(this.handleError));
  }

  addmarkout(addmarkout:any){
    return this.http.post(`${this.baseUrl}/dashboard/addmarkout`, { data: addmarkout })
    .pipe(map((res) => {
      //this.adds.push(res['data']);
      return res;
    }),
    catchError(this.handleError));
  }
  applyleave(addapplyleave:any){
    return this.http.post(`${this.baseUrl}/dashboard/addapplyleave`, { data: addapplyleave })
    .pipe(map((res) => {
      //this.adds.push(res['data']);
      return res;
    }),
    catchError(this.handleError));
  }
  // store(addclient: Addclients): Observable<Addclients[]> {
  //   return this.http.post(`${this.baseUrl}/hr/clients/store`, { data: addclient })
  //     .pipe(map((res) => {
  //       //this.adds.push(res['data']);
  //       return this.addclients;
  //     }),
  //     catchError(this.handleError));
  // }

  getleavelist(){
    return this.http.get(`${this.baseUrl}/dashboard/leavelist`).pipe(
      map((res) => {
        
        this.addcase2 = res['data'];
        return this.addcase2;
    }),
    catchError(this.handleError));
  }

  profilesave(res) {
    return this.http.post(`${this.baseUrl}/dashboard/profilesave`, res )
      .pipe(map((res) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }
  
  getcases() {
    return this.http.get(`${this.baseUrl}/dashboard/todaycases`).pipe(
      map((res) => {
        this.cases = res['data'];
        return this.cases;
    }),
    catchError(this.handleError));
  }

  getlist() {
    return this.http.get(`${this.baseUrl}/dashboard/todaydolist`).pipe(
      map((res) => {
        this.list = res['data'];
        return this.list;
    }),
    catchError(this.handleError));
  }

  getnoticelist() {
    return this.http.get(`${this.baseUrl}/dashboard/notices`).pipe(
      map((res) => {
        this.noticelist = res['data'];
        return this.noticelist;
    }),
    catchError(this.handleError));
  }


fetchuser(id:number) {
  const params = new HttpParams()
  .set('id', id.toString());
  return this.http.get(`${this.baseUrl}/dashboard/fetch`, { params: params }).pipe(
    map((res) => {
      this.dashboards = res['data'];
      // console.log(res);
      return this.dashboards;
  }),
  catchError(this.handleError));
}


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
