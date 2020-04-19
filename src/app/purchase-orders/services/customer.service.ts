import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from 'src/api/api-urls';
import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
import { Customer } from '../models/customer';
import { handleError } from './handle-error';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(ApiUrls.customers).pipe(
      catchError(handleError)
    );
  }
}
