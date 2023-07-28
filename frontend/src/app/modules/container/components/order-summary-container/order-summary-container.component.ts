import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/store/models/cart-state.model';
import { Cart } from 'src/app/store/models/cart.model';
import { selectCart } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-order-summary-container',
  templateUrl: './order-summary-container.component.html',
  styleUrls: ['./order-summary-container.component.scss']
})
export class OrderSummaryContainerComponent implements OnInit{
  private store=inject(Store);
  public envio:number=2000;
  public total:number=0;
  shoppingCart: Cart = {
    orders:[],
    total: 0,
    state: CartState.New
  }




ngOnInit(): void {



  this.store.select(selectCart).subscribe(shoppingCart => {


    this.shoppingCart = shoppingCart;
    this.total=shoppingCart.total+this.envio;
  });


}

}
