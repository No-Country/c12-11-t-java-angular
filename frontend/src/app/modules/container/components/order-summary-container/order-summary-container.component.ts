import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CartStatus} from 'src/app/store/models/cart-status.model';
import {CartState} from 'src/app/store/models/cart.model';
import {selectCart} from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-order-summary-container',
  templateUrl: './order-summary-container.component.html',
  styleUrls: ['./order-summary-container.component.scss']
})
export class OrderSummaryContainerComponent implements OnInit{
  private store=inject(Store);
  private router=inject(Router);
  public envio:number=2000;
  public total:number=0;
  shoppingCart: CartState = {
    cart: {
      id: 0,
      orders: [],
      total: 0,
      state: CartStatus.New,
    },
    loading: false,
    error: null
  }



  ngOnInit(): void {


    this.store.select(selectCart).subscribe(shoppingCart => {
      console.log(shoppingCart);

    this.shoppingCart = shoppingCart;
    this.total=shoppingCart.cart.total+this.envio;
  });


  }

}
