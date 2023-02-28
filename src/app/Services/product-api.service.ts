import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';
// Day6
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  // inject httpclient service
  constructor(private httpClient: HttpClient) { }

  // getAllProducts

  getAllProducts():Observable<Iproduct[]>{
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/products');
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);

  }
// get products by category id
  getProductsByCategoryId(categoryId:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${categoryId}`);
  }

  // get product by id
getProductByID(prdID:number):Observable<Iproduct>{
  return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`)
}
}
