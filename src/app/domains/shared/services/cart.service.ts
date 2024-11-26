import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cart = signal<Product[]>([])

  readonly total = computed(() => {
    const cartValue = this.cart();
    return cartValue.reduce((prevValue, currentValue) => { return prevValue += currentValue.price }, 0)
  })

  constructor() { }

  addToCart(product:Product){
    this.cart.update((prevValue)=>[... prevValue, product])
  }
}
