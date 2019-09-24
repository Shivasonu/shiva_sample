import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addbank from './addbank';

@Injectable({
    providedIn: 'root'
  })
  export class AddbankService {
    navigate(arg0: any[]): any {
      throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
  addbank: Addbank[];
  
  constructor(private http: HttpClient) { }

  getAll(id: number): Observable<Addbank[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/bank/list`, { params: params }).pipe(
      map((res) => {
        this.addbank = res['data'];
        return this.addbank;
    }),
    catchError(this.handleError));
  }

  store(addbank: Addbank): Observable<Addbank[]> {
    return this.http.post(`${this.baseUrl}/hr/bank/store`, { data: addbank })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  deletebank(id: number): Observable<Addbank[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/bank/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addbank.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.addbank= filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
