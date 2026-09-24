import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICustomerGroup } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class GroupCustomerHttpService {
  // Bài 18: áp dụng bài 14 (nhóm/ngFor lồng nhau) + bài 16 (Http Service, Handle Error)
  private _url: string = './assets/data/customers.json';

  constructor(private _http: HttpClient) {}

  getGroupCustomers(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>(this._url);
  }

  getGroupCustomersHandleError() {
    return this._http
      .get<ICustomerGroup[]>(this._url)
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
