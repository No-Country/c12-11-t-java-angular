import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuMenuComponent {
  /*
  @Input() id!: number;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() price!: number;
*/
  @Input() product!: Product;

  truncateTextMobile() {
    if (this.product.description.length <= 60) {
      return this.product.description
    }
    return this.product.description.substring(0, 60) + '...'
  }

  truncateTextDektop() {
    if (this.product.description.length <= 200) {
      return this.product.description
    }
    return this.product.description.substring(0, 200) + '...'
  }
}

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

