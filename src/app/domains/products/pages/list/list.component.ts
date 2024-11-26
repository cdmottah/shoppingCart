import { Component, inject, signal } from '@angular/core';
import { Product } from "@shared/models/product.model";
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { ProductComponent } from '@product/components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  private _cartService = inject(CartService)
  private _productService = inject(ProductService)


  ngOnInit(){
    this._productService.getProducts().subscribe({
      next:(products)=>{
        this.products.set(products)
      }
    })
  }
  products = signal<Product[]>([ ])

  cart = this._cartService.cart;
}
