import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = `https://api.escuelajs.co/api/v1`
  private _httpClient= inject(HttpClient)
  constructor() { }

  getProducts(){
    return this._httpClient.get<Product[]>(`${this._url}/products`)
  }
}
