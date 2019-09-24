import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Adduserrole from './adduserrole';

@Injectable({
  providedIn: 'root'
})
export class AdduserroleService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
adduserroles: Adduserrole[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Adduserrole[]> {
    return this.http.get(`${this.baseUrl}/hr/userrole/list`).pipe(
      map((res) => {
        this.adduserroles = res['data'];
        return this.adduserroles;
    }),
    catchError(this.handleError));
  }

  store(adduserrole: Adduserrole): Observable<Adduserrole[]> {
    return this.http.post(`${this.baseUrl}/hr/userrole/store`, { data: adduserrole })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  update(adduserrole: Adduserrole): Observable<Adduserrole[]> {
    return this.http.put(`${this.baseUrl}/hr/userrole/update`, { data: adduserrole })
      .pipe(map((res) => {
        const theAdd = this.adduserroles.find((item) => {
          return +item['id'] === +adduserrole['id'];
        });
        if (theAdd) {
          theAdd['name'] = +adduserrole['name'];
          theAdd['description'] = adduserrole['description'];
          theAdd['date_time'] = adduserrole['date_time'];
        }
        return this.adduserroles;
      }),
      catchError(this.handleError));
  }

  fetchAll(id:number): Observable<Adduserrole[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/userrole/fetch`, { params: params }).pipe(
      map((res) => {
        this.adduserroles = res['data'];
        return this.adduserroles;
    }),
    catchError(this.handleError));
  }

  deleteuserrole(id: number): Observable<Adduserrole[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/userrole/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.adduserroles.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.adduserroles= filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
