import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Adddocuments from './adddocuments';

@Injectable({
  providedIn: 'root'
})
export class AdddocumentService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
adddocuments: Adddocuments[];

constructor(private http: HttpClient) { }

storedocument(addcase: Adddocuments): Observable<Adddocuments[]> {
    return this.http.post(`${this.baseUrl}/cases/documents/store`, { data: addcase })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }

  editAll(id:number): Observable<Adddocuments[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/cases/documents/edit`, { params: params }).pipe(
      map((res) => {
        this.adddocuments = res['data'];
        return this.adddocuments;
    }),
    catchError(this.handleError));
  }

getdesignname(){
    return this.http.get(`${this.baseUrl}/cases/documents/doclist`).pipe(
      map((res:any) => {
        this.adddocuments = res['data'];
        return this.adddocuments;
    }),
    catchError(this.handleError));
  }
  
  getAll(){
    return this.http.get(`${this.baseUrl}/cases/documents/list`).pipe(
      map((res) => {
        
        this.adddocuments = res['data'];
        return this.adddocuments;
    }),
    catchError(this.handleError));
  }

  storedoc(res) {
    return this.http.post(`${this.baseUrl}/cases/documents/storedoc`, res )
      .pipe(map((res) => {
        if(res['data']['start']=='true'){ return res; }
        else { return this.adddocuments; }
        
      }),
      catchError(this.handleError));
  }

  fetchdoc(id:number): Observable<Adddocuments[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/cases/documents/fetchdoc`, { params: params }).pipe(
      map((res) => {
        this.adddocuments = res['data'];
        return this.adddocuments;
    }),
    catchError(this.handleError));
  }

  deletedoc(id: number): Observable<Adddocuments[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/cases/documents/deletedoc`, { params: params })
      .pipe(map((res:any) => {
        const filteredAdds = this.adddocuments.filter((car) => {
          return +car['id'] !== +id;
        });
        return res;
      }),
      catchError(this.handleError));
  }

  delete(id: number): Observable<Adddocuments[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/cases/documents/delete`, { params: params })
      .pipe(map((res:any) => {
        const filteredAdds = this.adddocuments.filter((car) => {
          return +car['id'] !== +id;
        });
        return res;
      }),
      catchError(this.handleError));
  }

  update(addclient: Adddocuments): Observable<Adddocuments[]> {
    return this.http.put(`${this.baseUrl}/cases/documents/update`, { data: addclient })
      .pipe(map((res:any) => {
        const theAdd = this.adddocuments.find((item) => {
          return +item['id'] === +addclient['id'];
        });
        console.log(res);
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
