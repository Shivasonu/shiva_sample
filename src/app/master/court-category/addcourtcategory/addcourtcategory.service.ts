import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addcourtcategory from './addcourtcategory';
@Injectable({
    providedIn: 'root'
})
export class AddcourtcategoryService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addcourtcategorys: Addcourtcategory[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addcourtcategory[]> {
        return this.http.get(`${this.baseUrl}/master/courtcategory/list`).pipe(
          map((res) => {
            this.addcourtcategorys = res['data'];
            return this.addcourtcategorys;
        }),
        catchError(this.handleError));
      }

      deletecourtcategory(id: number): Observable<Addcourtcategory[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/courtcategory/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addcourtcategorys.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addcourtcategory: Addcourtcategory): Observable<Addcourtcategory[]> {
        return this.http.post(`${this.baseUrl}/master/courtcategory/store`, { data: addcourtcategory })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addcourtcategory: Addcourtcategory): Observable<Addcourtcategory[]> {
        return this.http.put(`${this.baseUrl}/master/courtcategory/update`, { data: addcourtcategory })
          .pipe(map((res:any) => {
            const theAdd = this.addcourtcategorys.find((item) => {
              return +item['id'] === +addcourtcategory['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addcourtcategory['name'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addcourtcategory[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/courtcategory/fetch`, { params: params }).pipe(
          map((res) => {
            this.addcourtcategorys = res['data'];
            return this.addcourtcategorys;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}