import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addemployees from './addemployees';

@Injectable({
  providedIn: 'root'
})
export class AddemployeesService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
addemployees: Addemployees[];

constructor(private http: HttpClient) { }

  getAll(): Observable<Addemployees[]> {
    return this.http.get(`${this.baseUrl}/hr/employees/list`).pipe(
      map((res) => {
        this.addemployees = res['data'];
        return this.addemployees;
    }),
    catchError(this.handleError));
  }

  getemployeenames(): Observable<Addemployees[]> {
    return this.http.get(`${this.baseUrl}/hr/employees/employeenames`).pipe(
      map((res) => {
        this.addemployees = res['data'];
        console.log(res);
        return this.addemployees;
    }),
    catchError(this.handleError));
  }

  // store(addclient: Addemployees): Observable<Addemployees[]> {
  //   return this.http.post(`${this.baseUrl}/hr/employees/store`, { data: addclient })
  //     .pipe(map((res) => {
  //       //this.adds.push(res['data']);
  //       return this.addemployees;
  //     }),
  //     catchError(this.handleError));
  // }
  store(res) {
    return this.http.post(`${this.baseUrl}/hr/employees/store`, res )
      .pipe(map((res) => {
         return res;
       
        
      }),
      catchError(this.handleError));
  }
  update(addemployee: Addemployees): Observable<Addemployees[]> {
    return this.http.put(`${this.baseUrl}/hr/employees/update`, { data: addemployee })
      .pipe(map((res:any) => {
        const theAdd = this.addemployees.find((item) => {
          return +item['id'] === +addemployee['id'];
        });
        if (theAdd) {
          theAdd['name'] = +addemployee['name'];
          theAdd['description'] = addemployee['description'];
          theAdd['date_time'] = addemployee['date_time'];
        }
        return res;
      }),
      catchError(this.handleError));
  }

  fetchAll(id:number): Observable<Addemployees[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/employees/fetch`, { params: params }).pipe(
      map((res) => {
        this.addemployees = res['data'];
        return this.addemployees;
    }),
    catchError(this.handleError));
  }

  deleteemployee(id: number): Observable<Addemployees[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/employees/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addemployees.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.addemployees= filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
