import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerRoutingModule} from './container-routing.module';
import {LayoutContainerComponent} from './layout/layout-container/layout-container.component';
import {HomeComponent} from './pages/home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '@modules/auth/auth.module';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {FooterMobileComponent} from './components/footer-mobile/footer-mobile.component';
import {PaymentMethodComponent} from './pages/payment-method/payment-method.component';
import {CardPlateMenuComponent} from '@modules/container/components/card-plate/card-plate.menu.component';
import {DeckMenuComponent} from '@modules/container/components/deck-menu/deck-menu.component';
import {MenuComponent} from '@modules/container/pages/menu/menu.component';
import {ButtonFilterMenuComponent} from '@modules/container/components/button-filter-menu/button-filter-menu.component';
import {
  GroupButtonFilterMenuComponent
} from '@modules/container/components/group-button-filter-menu/group-button-filter-menu.component';
import {InputSearchMenuComponent} from '@modules/container/components/input-search-menu/input-search-menu.component';
import {
  DescripcionProductoComponent
} from '@modules/container/pages/descripcion-producto/descripcion-producto.component';
import {ButtonCounterComponent} from '@modules/container/components/button-counter/button-counter.component';
import {
  ButtonCounterProductOptionalComponent
} from '@modules/container/components/button-counter-product-optional/button-counter-product-optional.component';
import {ProductOptionalComponent} from '@modules/container/components/product-optional/product-optional.component';
import {
  CardModalPlateDetailsComponent
} from '@modules/container/components/card-modal-plate-details/card-modal-plate-details.component';
import {BadgeComponent} from "@modules/container/components/badge/badge.component";
import {StarRatingComponent} from "@modules/container/components/start-rating/star-rating.component";
import {TabsComponent} from "@modules/container/components/tabs/tabs.component";
import {ConfirmOrderComponent} from "@modules/container/pages/confirm-order/confirm-order.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {StoreModule} from "@ngrx/store";
import {SharedModule} from "@shared/shared.module";
import {menuReducer} from "@modules/container/store/reducers/menu.reducer";



@NgModule({
  declarations: [
    LayoutContainerComponent,
    HomeComponent,
    ShoppingCartComponent,
    FooterMobileComponent,
    PaymentMethodComponent,
    //LoginModalComponent
    CardPlateMenuComponent,
    DeckMenuComponent,
    MenuComponent,
    ButtonFilterMenuComponent,
    GroupButtonFilterMenuComponent,
    InputSearchMenuComponent,
    DescripcionProductoComponent,
    ButtonCounterComponent,
    ButtonCounterProductOptionalComponent,
    ProductOptionalComponent,
    BadgeComponent,
    StarRatingComponent,
    CardModalPlateDetailsComponent,
    TabsComponent,
    ConfirmOrderComponent,
    StarRatingComponent,
    CardModalPlateDetailsComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    NgbCarouselModule,
    StoreModule.forFeature('menu', menuReducer),
    NgbCarouselModule,
    SharedModule,
  ]
})
export class ContainerModule {
}
