import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http:HttpClient) { }
  private baseURL:string='http://localhost:8081/orders/';
  postCustomer(customer:Customer){
    return this.http.post<Customer>(this.baseURL,customer)
  }
}
