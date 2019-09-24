import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Addarchivedcases from './archivedcases';


@Injectable({
    providedIn: 'root'
})
export class Addarchivedservice {
    navigate(arg0: any[]): any {
        throw new Error("Method not implemented.");
    }
    baseUrl = 'http://localhost/advocate_api';
    addarchivedcases: Addarchivedcases[];
    constructor(private http: HttpClient) { }

    storearchivedcase(cases: Addarchivedcases) {
        console.log(cases);
        return this.http.post(`${this.baseUrl}/cases/archivedcase/store`, { data: cases })
            .pipe(map((res) => {
                //this.adds.push(res['data']);
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