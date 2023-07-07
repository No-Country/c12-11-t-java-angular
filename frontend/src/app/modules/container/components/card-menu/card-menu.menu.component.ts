import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuMenuComponent {
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

