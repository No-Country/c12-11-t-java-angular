import { Component, signal } from '@angular/core';

import { faBars} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '@shared/interfaces/menu-item.interface';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent {

  faBars = faBars;

  isCollapsed = false;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  public menuItems = signal<MenuItem[]>([
    { title: 'Home', route: 'home'},
    { title: 'Menú', route: 'menu'},
  ]);

}
