import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addnotice from './addnotice';

@Injectable({
  providedIn: 'root'
})
export class AddnoticeService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
addnotice: Addnotice[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Addnotice[]> {
    return this.http.get(`${this.baseUrl}/hr/notice/list`).pipe(
      map((res) => {
        this.addnotice = res['data'];
        return this.addnotice;
    }),
    catchError(this.handleError));
  }

  store(addnotice: Addnotice): Observable<Addnotice[]> {
    return this.http.post(`${this.baseUrl}/hr/notice/store`, { data: addnotice })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  update(addnotice: Addnotice): Observable<Addnotice[]> {
    return this.http.put(`${this.baseUrl}/hr/notice/update`, { data: addnotice })
      .pipe(map((res:any) => {
        const theAdd = this.addnotice.find((item) => {
          return +item['id'] === +addnotice['id'];
        });
        if (theAdd) {
          theAdd['name'] = +addnotice['name'];
          theAdd['description'] = addnotice['description'];
          theAdd['date_time'] = addnotice['date_time'];
        }
        return res;
      }),
      catchError(this.handleError));
  }

  fetchAll(id:number): Observable<Addnotice[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/notice/fetch`, { params: params }).pipe(
      map((res) => {
        this.addnotice = res['data'];
        return this.addnotice;
    }),
    catchError(this.handleError));
  }

  deletenotice(id: number): Observable<Addnotice[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/notice/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addnotice.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.addnotice= filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
