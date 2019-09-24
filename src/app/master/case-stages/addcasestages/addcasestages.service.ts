import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addcasestages from './addcasestages';
@Injectable({
    providedIn: 'root'
})
export class AddcasestagesService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addcasestagess: Addcasestages[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addcasestages[]> {
        return this.http.get(`${this.baseUrl}/master/casestages/list`).pipe(
          map((res) => {
            this.addcasestagess = res['data'];
            return this.addcasestagess;
        }),
        catchError(this.handleError));
      }

      deletecasestages(id: number): Observable<Addcasestages[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/casestages/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addcasestagess.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addcasestages: Addcasestages): Observable<Addcasestages[]> {
        return this.http.post(`${this.baseUrl}/master/casestages/store`, { data: addcasestages })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addcasestages: Addcasestages): Observable<Addcasestages[]> {
        return this.http.put(`${this.baseUrl}/master/casestages/update`, { data: addcasestages })
          .pipe(map((res:any) => {
            const theAdd = this.addcasestagess.find((item) => {
              return +item['id'] === +addcasestages['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addcasestages['name'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addcasestages[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/casestages/fetch`, { params: params }).pipe(
          map((res) => {
            this.addcasestagess = res['data'];
            return this.addcasestagess;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}