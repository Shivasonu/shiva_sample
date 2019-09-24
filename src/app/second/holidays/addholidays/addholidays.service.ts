import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addholidays from './addholidays';

@Injectable({
  providedIn: 'root'
})
export class Addholidayservice {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
dashboards: any;
addholiday: any;
//addholidays1:Addholidays[];
//addholidays:Addholidays[];
constructor(private http: HttpClient) { }

add_holiday(addghholidays){
    return this.http.post(`${this.baseUrl}/hr/holidays/addholidays`, { data: addghholidays })
    .pipe(map((res) => {
      //this.adds.push(res['data']);
      return res;
    }),
    catchError(this.handleError));
  }

  getholidaysjan() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistjan`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysfeb() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistfeb`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysmar() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistmar`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysapr() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistapr`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysmay() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistmay`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysjun() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistjun`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysjul() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistjul`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysaug() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistaug`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidayssep() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistsep`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysoct() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistoct`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysnov() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistnov`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  getholidaysdec() {
    return this.http.get(`${this.baseUrl}/hr/holidays/holidayslistdec`).pipe(
      map((res) => {
        this.addholiday = res['data'];
        return this.addholiday;
    }),
    catchError(this.handleError));
  }

  
  

  delholiday(id: number): Observable<Addholidays[]> {
    const params = new HttpParams()
      .set('id', id.toString());

     return this.http.delete(`${this.baseUrl}/hr/holidays/delete`, { params: params })
       .pipe(map((res: any) => {
        
        return res;
       }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}
