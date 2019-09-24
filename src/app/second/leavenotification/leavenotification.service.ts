import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import leavenotification from './leavenotification';

@Injectable({
    providedIn: 'root'
  })
  export class Addleaveservice {
    navigate(arg0: any[]): any {
      throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
  dashboards: any;
  leaveapply: any;
  leavenotification:any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<leavenotification[]> {
    return this.http.get(`${this.baseUrl}/hr/leave_notification/list`).pipe(
      map((res) => {
        this.leavenotification = res['data'];
        return this.leavenotification;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}