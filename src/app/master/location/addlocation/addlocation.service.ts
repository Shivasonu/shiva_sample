import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addlocation from './addlocation';
@Injectable({
    providedIn: 'root'
})
export class AddlocationService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addlocations: Addlocation[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addlocation[]> {
        return this.http.get(`${this.baseUrl}/master/location/list`).pipe(
          map((res) => {
            this.addlocations = res['data'];
            return this.addlocations;
        }),
        catchError(this.handleError));
      }

      deletelocation(id: number): Observable<Addlocation[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/location/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addlocations.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addlocation: Addlocation): Observable<Addlocation[]> {
        return this.http.post(`${this.baseUrl}/master/location/store`, { data: addlocation })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addlocation: Addlocation): Observable<Addlocation[]> {
        return this.http.put(`${this.baseUrl}/master/location/update`, { data: addlocation })
          .pipe(map((res:any) => {
            const theAdd = this.addlocations.find((item) => {
              return +item['id'] === +addlocation['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addlocation['name'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addlocation[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/location/fetch`, { params: params }).pipe(
          map((res) => {
            this.addlocations = res['data'];
            return this.addlocations;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}