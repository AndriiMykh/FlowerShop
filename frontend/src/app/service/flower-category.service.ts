import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlowerCategory } from '../common/flower-category';

@Injectable({
  providedIn: 'root'
})
export class FlowerCategoryService {

  constructor(private http:HttpClient) { }
  private baseURL:string='http://localhost:8081/flowers-category/';
  getProductList():Observable<FlowerCategory[]>{
    return this.http.get<FlowerCategory[]>(this.baseURL);
  }
}
