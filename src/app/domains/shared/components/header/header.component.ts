import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly faCartShopping = faCartShopping
  readonly faClose = faClose

  hideSideMenu = signal(true)

  toggleSideMenu() {
    this.hideSideMenu.update(res => !res)
  }
}
