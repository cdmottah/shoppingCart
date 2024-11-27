import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _apiUrl = environment.apiUrl
  private _httpClient = inject(HttpClient)
  constructor() { }

  getProducts(categoryId?: string) {
    const url = new URL(`${this._apiUrl}/products`)
    if (categoryId) url.searchParams.set('categoryId', categoryId)
    return this._httpClient.get<Product[]>(url.toString())
  }

  getOne(id: string) {
    return this._httpClient.get<Product>(`${this._apiUrl}/products/${id}`)
  }
}
