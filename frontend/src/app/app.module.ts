import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NotFoundComponent} from './shared/pages/not-found/not-found.component';
import {CardMenuMenuComponent} from '@modules/container/components/card-menu/card-menu.menu.component';
import {StarsMenuComponent} from '@modules/container/components/star-menu/stars-menu.component';
import {DeckMenuComponent} from '@modules/container/components/deck-menu/deck-menu.component';
import {MenuComponent} from './modules/container/pages/menu/menu.component';
import {
  ButtonFilterMenuComponent
} from './modules/container/components/button-filter-menu/button-filter-menu.component';
import { GroupButtonFilterMenuComponent } from './modules/container/components/group-button-filter-menu/group-button-filter-menu.component';
import { InputSearchMenuComponent } from './modules/container/components/input-search-menu/input-search-menu.component';
import { DescripcionProductoComponent } from './modules/container/pages/descripcion-producto/descripcion-producto.component';
import { ButtonCounterComponent } from './modules/container/components/button-counter/button-counter.component';
import { ButtonCounterProductOptionalComponent } from './modules/container/components/button-counter-product-optional/button-counter-product-optional.component';
import { ProductOptionalComponent } from './modules/container/components/product-optional/product-optional.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CardMenuMenuComponent,
    StarsMenuComponent,
    DeckMenuComponent,
    MenuComponent,
    ButtonFilterMenuComponent,
    GroupButtonFilterMenuComponent,
    InputSearchMenuComponent,
    DescripcionProductoComponent,
    ButtonCounterComponent,
    ButtonCounterProductOptionalComponent,
    ProductOptionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
