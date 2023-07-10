import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faArrowLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  faAngleLeft = faAngleLeft;
  faArrowLeft=faArrowLeft;
  faPlus=faPlus;
  faMinus=faMinus;
  public valueDefaul:number=1;
  public price:number=4000;
  public priceCurrent=4000;
  private router=inject(Router);


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
  public goBack(){
    this.router.navigateByUrl('/container/menu');
  }

}
