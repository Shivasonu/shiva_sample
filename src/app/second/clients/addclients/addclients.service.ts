import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addclients from './addclient';

@Injectable({
  providedIn: 'root'
})
export class AddclientService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
addclients: Addclients[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Addclients[]> {
    return this.http.get(`${this.baseUrl}/hr/clients/list`).pipe(
      map((res) => {
        this.addclients = res['data'];
        return this.addclients;
    }),
    catchError(this.handleError));
  }

  // store(addclient: Addclients): Observable<Addclients[]> {
  //   return this.http.post(`${this.baseUrl}/hr/clients/store`, { data: addclient })
  //     .pipe(map((res) => {
  //       //this.adds.push(res['data']);
  //       return this.addclients;
  //     }),
  //     catchError(this.handleError));
  // }

  store(res) {
    return this.http.post(`${this.baseUrl}/hr/clients/store`, res )
      .pipe(map((res) => {
        //this.adds.push(res['data']);
        
        return res;
      }),
      catchError(this.handleError));
  }

  update(addclient: Addclients): Observable<Addclients[]> {
    return this.http.put(`${this.baseUrl}/hr/clients/update`, { data: addclient })
      .pipe(map((res:any) => {
        const theAdd = this.addclients.find((item) => {
          return +item['id'] === +addclient['id'];
        });
        if (theAdd) {
          theAdd['name'] = +addclient['name'];
          theAdd['description'] = addclient['description'];
          theAdd['date_time'] = addclient['date_time'];
        }
        // console.log(res);
        return res;
      }),
      catchError(this.handleError));
  }

  fetchAll(id:number): Observable<Addclients[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/clients/fetch`, { params: params }).pipe(
      map((res) => {
        this.addclients = res['data'];
        return this.addclients;
    }),
    catchError(this.handleError));
  }

  deleteclient(id: number): Observable<Addclients[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/clients/delete`, { params: params })
      .pipe(map((res: any) => {
        const filteredAdds = this.addclients.filter((car) => {
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
