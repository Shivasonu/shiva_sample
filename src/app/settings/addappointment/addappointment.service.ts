import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addappointment from './addappointment';

@Injectable({
    providedIn: 'root'
  })
  export class AddappointmentService {
    navigate(arg0: any[]): any {
      throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
  addappointments: Addappointment[];
  constructor(private http: HttpClient) { }

  getappointmentall(): Observable<Addappointment[]> {
    return this.http.get(`${this.baseUrl}/appointment/list`).pipe(
      map((res) => {
        this.addappointments = res['data'];
        return this.addappointments;
    }),
    catchError(this.handleError));
  }

  fetchappointmentAll(id:number): Observable<Addappointment[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/appointment/fetch`, { params: params }).pipe(
      map((res) => {
        this.addappointments = res['data'];
        return this.addappointments;
    }),
    catchError(this.handleError));
  }

  storeappointment(addappointment: Addappointment): Observable<Addappointment[]> {
    return this.http.post(`${this.baseUrl}/appointment/store`, { data: addappointment })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  update(addappointment: Addappointment): Observable<Addappointment[]> {
    return this.http.put(`${this.baseUrl}/appointment/update`, { data: addappointment })
      .pipe(map((res) => {
        const theAdd = this.addappointments.find((item) => {
          return +item['id'] === +addappointment['id'];
        });
        if (theAdd) {
          theAdd['title'] = +addappointment['title'];
          theAdd['name'] = addappointment['name'];
          theAdd['motive'] = addappointment['motive'];
          theAdd['date_time']=addappointment['date_time'];
          theAdd['notes']=addappointment['notes'];
        }
        return this.addappointments;
      }),
      catchError(this.handleError));
  }

  deleteappointment(id: number): Observable<Addappointment[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/appointment/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addappointments.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.addappointments = filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}