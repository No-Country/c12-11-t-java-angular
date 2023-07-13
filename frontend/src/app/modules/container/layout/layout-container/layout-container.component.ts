import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { faBars} from '@fortawesome/free-solid-svg-icons';
import { LoginModalComponent } from '@modules/auth/components/login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from '@shared/interfaces/menu-item.interface';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  private modalService = inject(NgbModal);

  private authService = inject(SocialAuthService);

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
        && this.router.url !== '/container/pay' && this.router.url !== '/container/confirm';
  }

  login() {
    console.log("holaaaaaaaa")
    const modalAgregarRef = this.modalService.open(LoginModalComponent,
      { size: 'md', backdrop: 'static', fullscreen: 'xs', scrollable: true });

      modalAgregarRef.result.then(
        (result) => {

          console.log("result => ", result)

          /*
          this.servicePedido.crearPedido(result).subscribe(rpta => {
            this.actualizarTabla();
          })
          */
        } ,
        (reason) => {
          console.log("reason =>", reason)
        }
      );
  }

  /*
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  */

}
