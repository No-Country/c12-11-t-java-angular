import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-deck-purchase-order',
  templateUrl: './deck-purchase-order.component.html',
  styleUrls: ['./deck-purchase-order.component.scss']
})
export class DeckPurchaseOrderComponent {
  purchaseOrders;

  constructor() {
    this.purchaseOrders = [
      {
        title: "Hamburguesa de garbanzos",
        address: "Matheu 1669",
        timeMin: "12:30",
        timeMax: "12:45"
      },
      {
        title: "Hamburguesa de garbanzos",
        address: "Matheu 1669",
        timeMin: "12:30",
        timeMax: "12:45"
      },
      {
        title: "Hamburguesa de garbanzos",
        address: "Matheu 1669",
        timeMin: "12:30",
        timeMax: "12:45"
      },
      {
        title: "Hamburguesa de garbanzos",
        address: "Matheu 1669",
        timeMin: "12:30",
        timeMax: "12:45"
      },
    ]
  }


}
