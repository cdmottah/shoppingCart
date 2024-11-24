import { Component, Input, signal, WritableSignal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly faCartShopping = faCartShopping
  readonly faClose = faClose

  hideSideMenu = signal(true)
  @Input({required:true}) cart!: WritableSignal<Product[]>

  toggleSideMenu() {
    this.hideSideMenu.update(res => !res)
  }
}
