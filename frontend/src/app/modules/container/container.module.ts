import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class ContainerModule { }
