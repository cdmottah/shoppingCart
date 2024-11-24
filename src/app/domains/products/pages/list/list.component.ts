import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from "../../../shared/models/product.model";
import { HeaderComponent } from '../../../shared/components/header/header.component';

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

  products = signal<Product[]>([
    {
      id: Date.now(),
      image: `https://picsum.photos/640/640?r=${Math.random()}`,
      title: 'product 1',
      price: 5000,
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      image: `https://picsum.photos/640/640?r=${Math.random()}`,
      title: 'product 2',
      price: 10000,
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      image: `https://picsum.photos/640/640?r=${Math.random()}`,
      title: 'product 3',
      price: 17550,
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      image: `https://picsum.photos/640/640?r=${Math.random()}`,
      title: 'product 3',
      price: 17550,
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      image: `https://picsum.photos/640/640?r=${Math.random()}`,
      title: 'product 3',
      price: 17550,
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      image: `https://picsum.photos/640/640?r=${Math.random()}`,
      title: 'product 3',
      price: 17550,
      creationAt: new Date().toISOString()
    },
  ])

  cart = signal<Product[]>([])

  addToCart(product: Product) {
    this.cart.update(prevState=> [...prevState,product])
  }
}
