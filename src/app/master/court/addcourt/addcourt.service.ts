import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addcourt from './addcourt';

@Injectable({
    providedIn: 'root'
})
export class AddcourtService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addcourts: Addcourt[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addcourt[]> {
        return this.http.get(`${this.baseUrl}/master/court/list`).pipe(
          map((res) => {
            this.addcourts = res['data'];
            return this.addcourts;
        }),
        catchError(this.handleError));
      }
      getLocation(): Observable<Addcourt[]> {
        return this.http.get(`${this.baseUrl}/master/location/list`).pipe(
          map((res) => {
            
            this.addcourts = res['data'];
            return this.addcourts;
        }),
        catchError(this.handleError));
      }
      getcourt_cate(): Observable<Addcourt[]> {
        return this.http.get(`${this.baseUrl}/master/courtcategory/list`).pipe(
          map((res) => {
            this.addcourts = res['data'];
            return this.addcourts;
        }),
        catchError(this.handleError));
      }
      deletecourt(id: number): Observable<Addcourt[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/court/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addcourts.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addcourt: Addcourt): Observable<Addcourt[]> {
        return this.http.post(`${this.baseUrl}/master/court/store`, { data: addcourt })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addcourt: Addcourt): Observable<Addcourt[]> {
        return this.http.put(`${this.baseUrl}/master/court/update`, { data: addcourt })
          .pipe(map((res:any) => {
            const theAdd = this.addcourts.find((item) => {
              return +item['id'] === +addcourt['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addcourt['name'];
              theAdd['description'] = addcourt['description'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addcourt[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/court/fetch`, { params: params }).pipe(
          map((res) => {
            this.addcourts = res['data'];
            return this.addcourts;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}