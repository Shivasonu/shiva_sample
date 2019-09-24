import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addpaymentmode from './addpaymentmode';
@Injectable({
    providedIn: 'root'
})
export class AddpaymentmodeService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addpaymentmodes: Addpaymentmode[];
    constructor(private http: HttpClient) { }

    getAll(): Observable<Addpaymentmode[]> {
        return this.http.get(`${this.baseUrl}/master/paymentmode/list`).pipe(
          map((res) => {
            this.addpaymentmodes = res['data'];
            return this.addpaymentmodes;
        }),
        catchError(this.handleError));
      }

      deletepaymentmode(id: number): Observable<Addpaymentmode[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/master/paymentmode/delete`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addpaymentmodes.filter((car) => {
              return +car['id'] !== +id;
            });
            return res;
          }),
          catchError(this.handleError));
      }

    store(addpaymentmode: Addpaymentmode): Observable<Addpaymentmode[]> {
        return this.http.post(`${this.baseUrl}/master/paymentmode/store`, { data: addpaymentmode })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      update(addpaymentmode: Addpaymentmode): Observable<Addpaymentmode[]> {
        return this.http.put(`${this.baseUrl}/master/paymentmode/update`, { data: addpaymentmode })
          .pipe(map((res:any) => {
            const theAdd = this.addpaymentmodes.find((item) => {
              return +item['id'] === +addpaymentmode['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addpaymentmode['name'];
            }
            return res;
          }),
          catchError(this.handleError));
      }
    
      fetchAll(id:number): Observable<Addpaymentmode[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/master/paymentmode/fetch`, { params: params }).pipe(
          map((res) => {
            this.addpaymentmodes = res['data'];
            return this.addpaymentmodes;
        }),
        catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      }
}