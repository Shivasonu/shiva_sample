import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Sendmessage from './sendmessage';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
  })
  export class SendmessageService {
    navigate(arg0: any[]): any {
      throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    sendmessage: Sendmessage[];
  
  constructor(private http: HttpClient,private cookieService: CookieService) { }

  getAll(id: number): Observable<Sendmessage[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/message/list`, { params: params }).pipe(
      map((res) => {
        this.sendmessage = res['data'];
        return this.sendmessage;
    }),
    catchError(this.handleError));
  }

  getmessage(id: number): Observable<Sendmessage[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/message/getall?id=` + id + "&userid=" + this.cookieService.get("userId")).pipe(
      map((res) => {
        this.sendmessage = res['data'];
        return this.sendmessage;
    }),
    catchError(this.handleError));
  }

  store(addbank: Sendmessage): Observable<Sendmessage[]> {
    return this.http.post(`${this.baseUrl}/message/store`, { data: addbank })
      .pipe(map((res) => {
        //this.adds.push(res['data']);
        return this.sendmessage;
      }),
      catchError(this.handleError));
  }

  deletebank(id: number): Observable<Sendmessage[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/hr/bank/delete`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.sendmessage.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.sendmessage= filteredAdds;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
