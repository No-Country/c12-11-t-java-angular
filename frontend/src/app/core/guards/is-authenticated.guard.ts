import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginModalComponent } from '@modules/auth/components/login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthStatus } from '@shared/enums/auth-status.enum';
import { AuthService } from '@shared/services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router      = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    return true;
  }

  // if ( authService.authStatus() === AuthStatus.checking ) {
  //   return false;
  // }

  // const url = state.url;
  // localStorage.setItem('url', url);

  //router.navigateByUrl('/container/shopping');
  //return false;

  const modalService = inject(NgbModal);

  const modalAgregarRef = modalService.open(LoginModalComponent,
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

  return false;
};
