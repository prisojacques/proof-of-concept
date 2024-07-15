import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Customer, CustomersData, results} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]>{
    return this.http.get<results>('https://northwind.netcore.io/customers')
        .pipe(
            map((r) => {
              return r.results
            })
        )
  }
}
