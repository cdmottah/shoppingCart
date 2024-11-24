import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({ required: true }) product!: Product

  @Output() addToCart = new EventEmitter<Product>()

  addToCartHandler() {
    console.log('click to child')
    this.addToCart.emit(this.product)
  }

}
