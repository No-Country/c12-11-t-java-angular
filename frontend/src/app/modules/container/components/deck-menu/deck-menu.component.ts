import {Component, Input} from '@angular/core';
import {Product} from "@modules/container/components/card-menu/card-menu.menu.component";

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.component.html',
  styleUrls: ['./deck-menu.component.scss']
})
export class DeckMenuComponent {
  @Input() productType!: ProductType;
}

export interface ProductType {
  title: string;
  products: Array<Product>;
}
