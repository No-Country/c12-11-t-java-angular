import { Store } from '@ngrx/store';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAngleLeft,
  faArrowLeft,
  faCirclePlus,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { CartState } from 'src/app/store/models/cart-state.model';
import { Cart } from 'src/app/store/models/cart.model';
import { selectCart } from 'src/app/store/selectors/cart.selectors';

import { AddIdAddress } from 'src/app/store/actions/pedido.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faArrowLeft = faArrowLeft;
  faPlus = faPlus;
  faMinus = faMinus;

  public state: string = '';

  public optionsDelivery: string = '0';
  public idAddress: number = 0;
  private store = inject(Store);
  private router = inject(Router);

  shoppingCart: Cart = {
    orders: [],
    total: 0,
    state: CartState.New,
  };
  ngOnInit(): void {
    this.getShoppingCart();
  }
  getShoppingCart() {
    this.store.select(selectCart).subscribe((shoppingCart) => {

      this.shoppingCart = shoppingCart;
    });
  }

  getIdAddress(id: number) {
    this.idAddress = id;
  }

  sgtePage() {
    if (this.idAddress > 0) {
      this.store.dispatch(AddIdAddress({ direccionId: this.idAddress }));
      this.router.navigateByUrl('/container/pay');
    }
  }

  public goBack() {
    this.router.navigateByUrl('/container/menu');
  }
}
