import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-plate',
  templateUrl: './card-plate.component.html',
  styleUrls: ['./card-plate.component.scss']
})
export class CardPlateMenuComponent {
  @Input() product!: Product;
  @Input() truncate: boolean = true;

  addCart() {
    console.log("Se debe agregar al carrito")
  }
}

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

