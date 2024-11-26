import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '@services/cart.service';
import { GlobalCurrencyPipe } from '@pipes/date.pipe';
import { TruncatePipe } from '@pipes/truncate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, GlobalCurrencyPipe, RouterLink, RouterLinkActive, TruncatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly _cartService = inject(CartService)

  readonly cart = this._cartService.cart
  readonly total = this._cartService.total

  readonly faCartShopping = faCartShopping
  readonly faClose = faClose
  readonly hideSideMenu = signal(true)


  toggleSideMenu() {
    this.hideSideMenu.update(res => !res)
  }
}
