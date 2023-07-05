import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { HomeComponent } from './pages/home/home.component';
import {MenuComponent} from "@modules/container/pages/menu/menu.component";
import {
  DescripcionProductoComponent
} from "@modules/container/pages/descripcion-producto/descripcion-producto.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'menu', component: MenuComponent
      },

      {
        path: 'descripcion', component: DescripcionProductoComponent
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
