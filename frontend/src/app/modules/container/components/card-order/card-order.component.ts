import {Component, Input, OnInit} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import {Store} from "@ngrx/store";
import {Order} from "../../../../store/models/order.model";
import {Plate} from "@shared/interfaces/plate.interface";
import {CartActions} from "../../../../store/actions/cart.actions";

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit {

  @Input() order!: Order;

  count: number = 1
  faPlus = faPlus

  constructor(private appStore: Store) {

  }

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


