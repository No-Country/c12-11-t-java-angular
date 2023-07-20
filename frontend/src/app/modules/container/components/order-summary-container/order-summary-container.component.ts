import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CartState} from 'src/app/store/models/cart-state.model';
import {Cart} from 'src/app/store/models/cart.model';
import {selectCart} from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-order-summary-container',
  templateUrl: './order-summary-container.component.html',
  styleUrls: ['./order-summary-container.component.scss']
})
export class OrderSummaryContainerComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  shoppingCart: Cart = {
    id: 0,
    orders: [],
    total: 0,
    state: CartState.New
  }


  ngOnInit(): void {


    this.store.select(selectCart).subscribe(shoppingCart => {
      console.log(shoppingCart);

      this.shoppingCart = shoppingCart;
    });


  }

}
