import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModalComponent } from '@modules/auth/components/login-modal/login-modal.component';
import { AuthModule } from '@modules/auth/auth.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';



@NgModule({
  declarations: [
    LayoutContainerComponent,
    HomeComponent,
    ShoppingCartComponent,
    FooterMobileComponent
    //LoginModalComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class ContainerModule { }
