import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addleaves from './addleaves';

@Injectable({
  providedIn: 'root'
})
export class AddleavesService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
addleaves: Addleaves[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Addleaves[]> {
    return this.http.get(`${this.baseUrl}/hr/leaves/list`).pipe(
      map((res) => {
        this.addleaves = res['data'];
        return this.addleaves;
    }),
    catchError(this.handleError));
  }

  store(addleave: Addleaves): Observable<Addleaves[]> {
    return this.http.post(`${this.baseUrl}/hr/leaves/store`, { data: addleave })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  update(addleave: Addleaves): Observable<Addleaves[]> {
    return this.http.put(`${this.baseUrl}/hr/leaves/update`, { data: addleave })
      .pipe(map((res:any) => {
        const theAdd = this.addleaves.find((item) => {
          return +item['id'] === +addleave['id'];
        });
        if (theAdd) {
          theAdd['name'] = +addleave['name'];
          theAdd['description'] = addleave['description'];
          theAdd['date_time'] = addleave['date_time'];
        }
        return res;
      }),
      catchError(this.handleError));
  }

  fetchAll(id:number): Observable<Addleaves[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/leaves/fetch`, { params: params }).pipe(
      map((res) => {
        this.addleaves = res['data'];
        return this.addleaves;
    }),
    catchError(this.handleError));
  }

  deleteleaves(id: number): Observable<Addleaves[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/leaves/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addleaves.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.addleaves= filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
