import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Addtask from './addtasks';


@Injectable({
    providedIn: 'root'
})
export class AddtasksService {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addtask: Addtask[];
    constructor(private http: HttpClient) { }
    getAll(): Observable<Addtask[]> {
        return this.http.get(`${this.baseUrl}/tasks/list`).pipe(
          map((res) => {
            this.addtask = res['data'];
            return this.addtask;
        }),
        catchError(this.handleError));
      }

      storetask(addtask: Addtask): Observable<Addtask[]> {
        return this.http.post(`${this.baseUrl}/tasks/store`, { data: addtask })
          .pipe(map((res:any) => {
            //this.adds.push(res['data']);
            return res;
          }),
          catchError(this.handleError));
      }

      storetaskmessage(addtask: Addtask): Observable<Addtask[]> {
        return this.http.post(`${this.baseUrl}/tasks/storetaskmessage`, { data: addtask })
          .pipe(map((res) => {
            //this.adds.push(res['data']);
            return this.addtask;
          }),
          catchError(this.handleError));
      }

      update(addtask: Addtask): Observable<Addtask[]> {
        return this.http.put(`${this.baseUrl}/tasks/update`, { data: addtask })
          .pipe(map((res:any) => {
            const theAdd = this.addtask.find((item) => {
              return +item['id'] === +addtask['id'];
            });
            if (theAdd) {
              theAdd['name'] = +addtask['name'];
              theAdd['priority'] = addtask['priority'];
              theAdd['due_date'] = addtask['due_date'];
              theAdd['case_id'] = addtask['case_id'];
              theAdd['employee_id'] = addtask['employee_id'];
              theAdd['progress'] = addtask['progress'];
              theAdd['description'] = addtask['description'];
            }
            return res;
          }),
          catchError(this.handleError));
      }

      fetchAll(id:number): Observable<Addtask[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/tasks/fetch`, { params: params }).pipe(
          map((res) => {
            this.addtask = res['data'];
            return this.addtask;
        }),
        catchError(this.handleError));
      }

      fetchtaskmessage(id:number): Observable<Addtask[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/tasks/fetchtaskmessage`, { params: params }).pipe(
          map((res) => {
            this.addtask = res['data'];
            // console.log(res['case_name']);
            return this.addtask;
        }),
        catchError(this.handleError));
      }
      fetchtaskmessage1(id:number): Observable<Addtask[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/tasks/fetchtaskmessage1`, { params: params }).pipe(
          map((res) => {
            this.addtask = res['data'];
            
            return this.addtask;
        }),
        catchError(this.handleError));
      }



      fetchbyuser(id:number): Observable<Addtask[]> {
        const params = new HttpParams()
          .set('id', id.toString());
        return this.http.get(`${this.baseUrl}/tasks/fetchbyuser`, { params: params }).pipe(
          map((res) => {
            this.addtask = res['data'];
            return this.addtask;
        }),
        catchError(this.handleError));
      }

      deletetask(id: number): Observable<Addtask[]> {
        const params = new HttpParams()
          .set('id', id.toString());
    
        return this.http.delete(`${this.baseUrl}/tasks/deletetask`, { params: params })
          .pipe(map((res:any) => {
            const filteredAdds = this.addtask.filter((car) => {
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