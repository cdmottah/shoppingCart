import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly apiUrl = environment.apiUrl
  private _httpClient = inject(HttpClient)
  constructor() { }

  getAll(){
    return this._httpClient.get<Category[]>(`${this.apiUrl}/categories`)
  }
}
