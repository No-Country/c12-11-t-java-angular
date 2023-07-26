import {Component, OnInit} from '@angular/core';
import {UserFacade} from "@shared/services/facades/user.facade";
import {Order} from "../../../../store/models/order.model";

@Component({
  selector: 'app-deck-purchase-order',
  templateUrl: './deck-purchase-order.component.html',
  styleUrls: ['./deck-purchase-order.component.scss']
})
export class DeckPurchaseOrderComponent implements OnInit {

  purchaseOrders;
  orders: Order[] = [];

  ngOnInit(): void {
    this.userFacade.getOrders().subscribe(value => {
      this.orders = value
    })
  }


  constructor(private userFacade: UserFacade) {
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
