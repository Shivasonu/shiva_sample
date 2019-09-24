import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addact from './addact';
@Injectable({
    providedIn: 'root'
})
export class AddactService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addacts: Addact[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addact[]> {
        return this.http.get(`${this.baseUrl}/master/act/list`).pipe(
          map((res) => {
            this.addacts = res['data'];
            return this.addacts;
        }),
        catchError(this.handleError));
      }

      deleteact(id: number): Observable<Addact[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/act/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addacts.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addact: Addact): Observable<Addact[]> {
        return this.http.post(`${this.baseUrl}/master/act/store`, { data: addact })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addact: Addact): Observable<Addact[]> {
        return this.http.put(`${this.baseUrl}/master/act/update`, { data: addact })
          .pipe(map((res:any) => {
            const theAdd = this.addacts.find((item) => {
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
    
      fetchAll(id:number): Observable<Addact[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/act/fetch`, { params: params }).pipe(
          map((res) => {
            this.addacts = res['data'];
            return this.addacts;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}