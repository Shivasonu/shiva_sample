import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addcases from './addcase';


@Injectable({
  providedIn: 'root'
})
export class AddcaseService {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
  baseUrl = 'http://localhost/advocate_api';
addcase: Addcases[];
addcase1:any[];
addcase2:any[];

constructor(private http: HttpClient) { }

storecase(addcase: Addcases): Observable<Addcases[]> {
    return this.http.post(`${this.baseUrl}/cases/case/store`, { data: addcase })
      .pipe(map((res:any) => {
        //this.adds.push(res['data']);
        return res;
      }),
      catchError(this.handleError));
  }
  

  fetchAll(id:number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/cases/case/fetch`, { params: params }).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  editAll(id:number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/cases/case/edit`, { params: params }).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }
  
  getAll(): Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/cases/case/list`).pipe(
      map((res) => {
        
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  getstarred(): Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/cases/case/liststarred`).pipe(
      map((res) => {
        
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  getarchived(): Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/cases/case/listarchived`).pipe(
      map((res) => {
        
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }
  getclientnames():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/hr/clients/clientnames`).pipe(
      map((res) => {
        
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  
  getlocationdetails():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/master/location/list`).pipe(
      map((res) => {
        
        this.addcase1 = res['data'];
        return this.addcase1;
    }),
    catchError(this.handleError));
  }

  getcourtdetails():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/master/court/list`).pipe(
      map((res) => {
        
        this.addcase2 = res['data'];
        return this.addcase2;
    }),
    catchError(this.handleError));
  }

  getcourtcategorylist():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/master/courtcategory/list`).pipe(
      map((res) => {
        
        this.addcase2 = res['data'];
        return this.addcase2;
    }),
    catchError(this.handleError));
  }
  
  getcasename(): Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/cases/case/casenames`).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  getactdetails():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/master/act/actlist`).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }
  getpatentdetails():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/casestudy/parentlist`).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  getcasestages():Observable<Addcases[]> {
    return this.http.get(`${this.baseUrl}/master/casestages/list`).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  update(addclient: Addcases): Observable<Addcases[]> {
    return this.http.put(`${this.baseUrl}/cases/case/update`, { data: addclient })
      .pipe(map((res:any) => {
        const theAdd = this.addcase.find((item) => {
          return +item['id'] === +addclient['id'];
        });
        console.log(res);
        return res;
      }),
      catchError(this.handleError));
  }

  starupdate(id: number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/cases/case/starupdate`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addcase.filter((car) => {
          return +car['id'] !== +id;
        });
        alert("Updated Sucessfully");
        return this.addcase= filteredAdds;
      }),
      catchError(this.handleError));
  }

  addhearing(res) {
    return this.http.post(`${this.baseUrl}/cases/case/addhearing`, res )
      .pipe(map((res) => {
        if(res['data']['start']=='true'){ alert("inserted sucessfully"); }
        else { return this.addcase; }
        
      }),
      catchError(this.handleError));
  }
  fetchhearing(id:number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/cases/case/fetchhearing`, { params: params }).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  deletehear(id: number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/cases/case/deletehear`, { params: params })
      .pipe(map(res => {
        const filteredAdds = this.addcase.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.addcase= filteredAdds;
      }),
      catchError(this.handleError));
  }

  fetchhearingdetails(id:number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(`${this.baseUrl}/cases/case/fetchhearingdetails`, { params: params }).pipe(
      map((res) => {
        this.addcase = res['data'];
        return this.addcase;
    }),
    catchError(this.handleError));
  }

  deleteacases(id: number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/cases/case/delete`, { params: params })
      .pipe(map((res: any) => {
        const filteredAdds = this.addcase.filter((car) => {
          return +car['id'] !== +id;
        });
        return res;
      }),
      catchError(this.handleError));
  }

  restoreacases(id: number): Observable<Addcases[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/cases/case/restore`, { params: params })
      .pipe(map((res: any) => {
        const filteredAdds = this.addcase.filter((car) => {
          return +car['id'] !== +id;
        });
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