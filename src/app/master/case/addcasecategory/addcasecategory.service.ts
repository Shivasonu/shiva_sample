import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addcasecategory from './addcasecategory';

@Injectable({
    providedIn: 'root'
})

export class AddcasecategoryService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addcasecategorys: Addcasecategory[];
    addcasecategory:any;
    constructor(private http: HttpClient) { }

    getcasecategoryname(): Observable<Addcasecategory[]> {
        return this.http.get(`${this.baseUrl}/master/casecategory/parentlist`).pipe(
          map((res) => {
            this.addcasecategorys = res['data'];
            return this.addcasecategorys;
        }),
        catchError(this.handleError));
      }

      store(addcasecategory: Addcasecategory): Observable<Addcasecategory[]> {
        return this.http.post(`${this.baseUrl}/master/casecategory/store`, { data: addcasecategory })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      getAll(): Observable<Addcasecategory[]> {
        return this.http.get(`${this.baseUrl}/master/casecategory/list`).pipe(
          map((res) => {
            this.addcasecategorys = res['data'];
            return this.addcasecategorys;
        }),
        catchError(this.handleError));
      }


      deletecasecategory(id: number): Observable<Addcasecategory[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/casecategory/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addcasecategorys.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

      fetchAll(id:number): Observable<Addcasecategory[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/casecategory/fetch`, { params: params }).pipe(
          map((res) => {
            this.addcasecategorys = res['data'];
            return this.addcasecategorys;
        }),
        catchError(this.handleError));
      }
      update(addact: Addcasecategory): Observable<Addcasecategory[]> {
        return this.http.put(`${this.baseUrl}/master/casecategory/update`, { data: addact })
          .pipe(map((res:any) => {
            const theAdd = this.addcasecategorys.find((item) => {
              return +item['id'] === +addact['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addact['name'];
              theAdd['description'] = addact['description'];
            }
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