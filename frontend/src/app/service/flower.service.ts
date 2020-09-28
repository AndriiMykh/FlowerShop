import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Flower} from 'src/app/common/flower'
@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private http:HttpClient) { }
  private baseURL:string='http://localhost:8081/flowers/';
  //private categoryURL:string='';
  getProductList():Observable<Flower[]>{
    return this.http.get<Flower[]>(this.baseURL);
  }
}
