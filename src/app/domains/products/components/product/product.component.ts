import { Component, inject, Input } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { CartService } from '@shared/services/cart.service';
import { GlobalCurrencyPipe } from "@shared/pipes/global.currency.pipe";
import { TruncatePipe } from '@pipes/truncate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, GlobalCurrencyPipe, TruncatePipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({ required: true }) product!: Product

  private _cartService = inject(CartService)

  addToCartHandler() {
    this._cartService.addToCart(this.product)
  }


}
