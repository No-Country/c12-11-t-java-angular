import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuMenuComponent {
  @Input() product!: Product;
  @Input() truncate: boolean = true;

  truncateTextMobile() {
    if (this.product.description.length <= 60 || !this.truncate) {
      return this.product.description
    }
    return this.product.description.substring(0, 60) + '...'
  }

  truncateTextDektop() {
    if (this.product.description.length <= 200 || !this.truncate) {
      return this.product.description
    }
    return this.product.description.substring(0, 200) + '...'
  }

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

