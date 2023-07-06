import { Component } from '@angular/core';
import { faAngleLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  faAngleLeft = faAngleLeft;
  faPlus=faPlus;
  faMinus=faMinus;
  public valueDefaul:number=1;
  public price:number=4000;
  public priceCurrent=4000;
  public addproduct(){
    this.valueDefaul++;
    this.price=this.price+this.priceCurrent;
  }
  public minusProduct(){
    if(this.valueDefaul>1){
      this.valueDefaul--;
      this.price=this.price-this.priceCurrent;
    }
  }
}
