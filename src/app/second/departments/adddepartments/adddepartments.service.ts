import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Adddepartments from './adddepartments';

@Injectable({
  providedIn: 'root'
})
export class AdddepartmentService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
  adddepartment: Adddepartments[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Adddepartments[]> {
    return this.http.get(`${this.baseUrl}/hr/department/list`).pipe(
      map((res) => {
        this.adddepartment = res['data'];
        return this.adddepartment;
      }),
      catchError(this.handleError));
  }

  store(adddepartment: Adddepartments): Observable<Adddepartments[]> {
    return this.http.post(`${this.baseUrl}/hr/department/store`, { data: adddepartment })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
        catchError(this.handleError));
  }

  update(adddepartment: Adddepartments): Observable<Adddepartments[]> {
    return this.http.put(`${this.baseUrl}/hr/department/update`, { data: adddepartment })
      .pipe(map((res:any) => {
        const theAdd = this.adddepartment.find((item) => {
          return +item['id'] === +adddepartment['id'];
        });
        if (theAdd) {
          theAdd['name'] = +adddepartment['name'];
          theAdd['description'] = adddepartment['description'];
         // theAdd['designations'] = adddepartment['designations'];
        }
        return res;
      }),
        catchError(this.handleError));
  }

  fetchAll(id: number): Observable<Adddepartments[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/hr/department/fetch`, { params: params }).pipe(
      map((res) => {
        this.adddepartment = res['data'];
        return this.adddepartment;
      }),
      catchError(this.handleError));
  }

  deletedepartment(id: number): Observable<Adddepartments[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/department/delete`, { params: params })
      .pipe(map((res:any) => {
        const filteredAdds = this.adddepartment.filter((car) => {
          return +car['id'] !== +id;
        });
        return res;
      }),
        catchError(this.handleError));
  }

  getdepartmentname(): Observable<Adddepartments[]> {
    return this.http.get(`${this.baseUrl}/hr/department/deptname`).pipe(
      map((res) => {
        this.adddepartment = res['data'];
        return this.adddepartment;
    }),
    catchError(this.handleError));
  }

  getdesignname(res){
    return this.http.get(`${this.baseUrl}/hr/department/designname?dep_id=`+res.id).pipe(
      map((res) => {
        this.adddepartment = res['data'];
        return this.adddepartment;
    }),
    catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
