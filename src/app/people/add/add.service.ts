import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Add from './add';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
adds: Add[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Add[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.adds = res['data'];
        return this.adds;
    }),
    catchError(this.handleError));
  }

  store(add: Add): Observable<Add[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: add })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  update(add: Add): Observable<Add[]> {
    return this.http.put(`${this.baseUrl}/update`, { data: add })
      .pipe(map((res:any) => {
        const theAdd = this.adds.find((item) => {
          return +item['id'] === +add['id'];
        });
        if (theAdd) {
          theAdd['name'] = +add['name'];
          theAdd['description'] = add['description'];
          theAdd['date_time'] = add['date_time'];
        }
        return res;
      }),
      catchError(this.handleError));
  }

  fetchAll(id:number): Observable<Add[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/fetch`, { params: params }).pipe(
      map((res) => {
        this.adds = res['data'];
        return this.adds;
    }),
    catchError(this.handleError));
  }

  delete(id: number): Observable<Add[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      .pipe(map((res:any) => {
        const filteredAdds = this.adds.filter((car) => {
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