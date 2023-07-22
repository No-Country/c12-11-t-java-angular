import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-purchase-order',
  templateUrl: './card-purchase-order.component.html',
  styleUrls: ['./card-purchase-order.component.scss']
})
export class CardPurchaseOrderComponent {
  @Input() title: string = "Hamburguesa de garbanzos";
  @Input() address: string = "Matheu 1669";
  @Input() timeMin: string = "12:30";
  @Input() timeMax: string = "12:45";


}
