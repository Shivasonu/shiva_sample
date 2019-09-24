import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addcontact from './addcontact';

@Injectable({
    providedIn: 'root'
  })
  export class AddcontactService {
    navigate(arg0: any[]): any {
      throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
  addcontacts: Addcontact[];
  constructor(private http: HttpClient) { }

  getcontactAll(): Observable<Addcontact[]> {
    return this.http.get(`${this.baseUrl}/contact/list`).pipe(
      map((res) => {
        this.addcontacts = res['data'];
        return this.addcontacts;
    }),
    catchError(this.handleError));
  }

  getcontactname(): Observable<Addcontact[]> {
    return this.http.get(`${this.baseUrl}/contact/listname`).pipe(
      map((res) => {
        this.addcontacts = res['data'];
        return this.addcontacts;
    }),
    catchError(this.handleError));
  }

  storecontact(addcontact: Addcontact): Observable<Addcontact[]> {
    return this.http.post(`${this.baseUrl}/contact/store`, { data: addcontact })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  update(addcontact: Addcontact): Observable<Addcontact[]> {
    return this.http.put(`${this.baseUrl}/contact/update`, { data: addcontact })
      .pipe(map((res:any) => {
        const theAdd = this.addcontacts.find((item) => {
          return +item['id'] === +addcontact['id'];
        });
        if (theAdd) {
          theAdd['name'] = +addcontact['name'];
          theAdd['email'] = addcontact['email'];
          theAdd['phone'] = addcontact['phone'];
          theAdd['address']=addcontact['address'];
        }
        return res;
      }),
      catchError(this.handleError));
  }

  fetchcontactAll(id:number): Observable<Addcontact[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/contact/fetch`, { params: params }).pipe(
      map((res) => {
        this.addcontacts = res['data'];
        return this.addcontacts;
    }),
    catchError(this.handleError));
  }

  deletecontact(id: number): Observable<Addcontact[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/contact/delete`, { params: params })
      .pipe(map((res:any) => {
        const filteredAdds = this.addcontacts.filter((car) => {
          return +car['id'] !== +id;
        });
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