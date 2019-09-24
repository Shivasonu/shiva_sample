import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import logins from './login';

@Injectable({
  providedIn: 'root'
})
export class loginService  {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
login: logins[];

constructor(private http: HttpClient) { }

   store(users) {
    return this.http.post(`${this.baseUrl}/userservice/login`, { data: users })
      .pipe(map((res) => {
        //this.adds.push(res['data']);
        // console.log(res);
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
