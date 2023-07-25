import { Plate } from '@shared/interfaces/plate.interface';
import { Store } from '@ngrx/store';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faArrowLeft, faCirclePlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartState } from 'src/app/store/models/cart-state.model';
import { Cart } from 'src/app/store/models/cart.model';
import { selectCart } from 'src/app/store/selectors/cart.selectors';
import { CartActions } from 'src/app/store/actions/cart.actions';
import { Order } from 'src/app/store/models/order.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faArrowLeft=faArrowLeft;
  faPlus=faPlus;
  faMinus=faMinus;


  public state:string="";
  public textAddress:string="";
  public optionsDelivery:string="0";
  public idAddress:number=0;
  public direcciones:any[]=[];
  public hasDireccion:boolean=false;
  private store=inject(Store);
  private router=inject(Router);

  shoppingCart: Cart = {
    orders:[],
    total: 0,
    state: CartState.New
  }
ngOnInit(): void {


this.getShoppingCart();


}
getShoppingCart(){
  this.store.select(selectCart).subscribe(shoppingCart => {
    console.log(shoppingCart);

    this.shoppingCart = shoppingCart;
  });
}

getIdAddress(id:number){
this.idAddress=id;

}






  public goBack(){
    this.router.navigateByUrl('/container/menu');

  }

}
