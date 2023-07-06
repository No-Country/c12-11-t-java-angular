import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'menu', component: HomeComponent
      },
      {
        path: 'shopping', component: ShoppingCartComponent
      },
      {
        path: 'pay', component: PaymentMethodComponent
      },
      {
        path: '**', redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
