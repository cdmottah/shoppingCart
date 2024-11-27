import { Component, inject, Input, input, signal } from '@angular/core';
import { Product } from "@shared/models/product.model";

import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { ProductComponent } from '@product/components/product/product.component';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent {

  private readonly _cartService = inject(CartService)
  private readonly _productService = inject(ProductService)
  private readonly _categoryService = inject(CategoryService)
  readonly products = signal<Product[]>([])
  readonly categories = signal<Category[]>([])
  private _categoryId: string | undefined = undefined
  @Input() set category_id(id: string | undefined) {
    this.getProducts(id);
    this._categoryId = id
  }

  get category_id() {
    return this._categoryId
  }
  readonly cart = this._cartService.cart;

  ngOnInit() {
    this.getCategories();
  }

  getProducts(categories: string | undefined) {
    this._productService.getProducts(categories).subscribe({
      next: (products) => {
        this.products.set(products)
      }
    })
  }

  getCategories() {
    this._categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories)
      }
    })
  }

}
