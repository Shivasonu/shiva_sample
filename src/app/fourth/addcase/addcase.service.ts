import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addcase from './addcase';


@Injectable({
    providedIn: 'root'
})
export class AddcaseService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addcases: Addcase[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addcase[]> {
        return this.http.get(`${this.baseUrl}/casestudy/list`).pipe(
          map((res) => {
            this.addcases = res['data'];
            return this.addcases;
        }),
        catchError(this.handleError));
      }
     
      deletecase(id: number): Observable<Addcase[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/casestudy/delete`, { params: params })
          .pipe(map(res => {
            const filteredAdds = this.addcases.filter((car) => {
              return +car['id'] !== +id;
            });
            return this.addcases= filteredAdds;
          }),
          catchError(this.handleError));
      }

      deleteattachment(id: number): Observable<Addcase[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/casestudy/deleteattach`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addcases.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }
    storecase(addcase: Addcase): Observable<Addcase[]> {
        return this.http.post(`${this.baseUrl}/casestudy/store`, { data: addcase })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }


      storeattachment(res) {
        return this.http.post(`${this.baseUrl}/casestudy/storeattachment`, res )
          .pipe(map((res) => {
            if(res['data']['start']=='true'){ return res; }
            else { return this.addcases; }
            
          }),
          catchError(this.handleError));
      }

      update(addcase: Addcase): Observable<Addcase[]> {
        return this.http.put(`${this.baseUrl}/casestudy/update`, { data: addcase })
          .pipe(map((res:any) => {
            const theAdd = this.addcases.find((item) => {
              return +item['id'] === +addcase['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addcase['name'];
              theAdd['description'] = addcase['description'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addcase[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/casestudy/view`, { params: params }).pipe(
          map((res) => {
            this.addcases = res['data'];
            return this.addcases;
        }),
        catchError(this.handleError));
      }

      fetchattachment(id:number): Observable<Addcase[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/casestudy/fetchattachment`, { params: params }).pipe(
          map((res) => {
            this.addcases = res['data'];
            return this.addcases;
        }),
        catchError(this.handleError));
      }

      getcasecategoryname(): Observable<Addcase[]> {
        return this.http.get(`${this.baseUrl}/casestudy/parentlist`).pipe(
          map((res) => {
            this.addcases = res['data'];
            return this.addcases;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }


}