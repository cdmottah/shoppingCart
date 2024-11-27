import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { GlobalCurrencyPipe } from '@shared/pipes/global.currency.pipe';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [GlobalCurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  @Input() id?: string
  private _productService = inject(ProductService)
  private _cartService = inject(CartService)

  product = signal<Product | null>(null)
  cover = signal<string>('')
  ngOnInit() {
    if (this.id) {
      this._productService.getOne(this.id).subscribe(product => {
        this.product.set(product)
        if (product.images.length > 0) this.changeCover(product.images[0])
      })
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage)
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this._cartService.addToCart(product)
    }
  }
}
