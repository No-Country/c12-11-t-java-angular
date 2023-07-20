import { Component, Input, OnInit, inject } from '@angular/core';
import { CartActions } from 'src/app/store/actions/cart.actions';
import { Order } from 'src/app/store/models/order.model';
import { CardOrderComponent } from '../card-order/card-order.component';
import { Plate } from '@shared/interfaces/plate.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-selected-container',
  templateUrl: './product-selected-container.component.html',
  styleUrls: ['./product-selected-container.component.scss']
})
export class ProductSelectedContainerComponent implements OnInit{
@Input()order!:Order;
  count: number=1;
  private appStore=inject(Store);
  ngOnInit(): void {
    this.count = this.order.count
  }

  getPlate(): Plate {
    return this.order.plate
  }

  onCountChange(newValue: number) {
    this.count = newValue;
    if (newValue >= 1) {
      this.appStore.dispatch(CartActions.addOrder({
        order: {
          ...this.order,
          count: this.count,
          totalParcial: this.count * this.getPlate().precio,
        }
      }))
    } else {
      this.appStore.dispatch(CartActions.removeOrder({
        order: {
          ...this.order,
          count: this.count,
          totalParcial: this.count * this.getPlate().precio,
        }
      }))
    }


  }
}
