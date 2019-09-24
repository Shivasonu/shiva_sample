import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addtax from './addtax';
@Injectable({
    providedIn: 'root'
})
export class AddtaxService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addtaxs: Addtax[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addtax[]> {
        return this.http.get(`${this.baseUrl}/master/tax/list`).pipe(
          map((res) => {
            this.addtaxs = res['data'];
            return this.addtaxs;
        }),
        catchError(this.handleError));
      }

      deletetax(id: number): Observable<Addtax[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/tax/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addtaxs.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addtax: Addtax): Observable<Addtax[]> {
        return this.http.post(`${this.baseUrl}/master/tax/store`, { data: addtax })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addtax: Addtax): Observable<Addtax[]> {
        return this.http.put(`${this.baseUrl}/master/tax/update`, { data: addtax })
          .pipe(map((res:any) => {
            const theAdd = this.addtaxs.find((item) => {
              return +item['id'] === +addtax['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addtax['name'];
              theAdd['percent'] = addtax['percent'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addtax[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/tax/fetch`, { params: params }).pipe(
          map((res) => {
            this.addtaxs = res['data'];
            return this.addtaxs;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}