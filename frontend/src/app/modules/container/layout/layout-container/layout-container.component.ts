import { ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { faBars} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '@shared/interfaces/menu-item.interface';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  mostrarElementos: boolean = true;

  router = inject(Router);

  cdr = inject(ChangeDetectorRef);

  faBars = faBars;

  isCollapsed = false;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  public menuItems = signal<MenuItem[]>([
    { title: 'Home', route: 'home'},
    { title: 'Menú', route: 'menu'},
  ]);

  ngOnInit(): void {
    this.checkRouter();

    // Escucha los eventos de cambio de ruta para actualizar la evaluación del *ngIf
    this.router.events.subscribe(() => {
      this.checkRouter();
      this.cdr.detectChanges(); // Marca el componente para la detección de cambios
    });
  }

  private checkRouter() {
    this.mostrarElementos = this.router.url !== '/container/shopping'
        && this.router.url !== '/container/pay';
  }

}
