import {Store} from '@ngrx/store';
import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faAngleLeft, faArrowLeft, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {CartStatus} from 'src/app/store/models/cart-status.model';
import {CartState} from 'src/app/store/models/cart.model';
import {selectCart} from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faArrowLeft = faArrowLeft;
  faPlus = faPlus;
  faMinus = faMinus;


  public state: string = "";
  public textAddress: string = "";
  public optionsDelivery: string = "0";

  public direcciones: any[] = [];
  public hasDireccion: boolean = false;
  private store = inject(Store);
  private router = inject(Router);

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


    this.getShoppingCart();


  }

  getShoppingCart() {
    this.store.select(selectCart).subscribe(shoppingCart => {
      console.log(shoppingCart);

      this.shoppingCart = shoppingCart;
    });
  }


  public goBack() {
    this.router.navigateByUrl('/container/menu');

  }

}
