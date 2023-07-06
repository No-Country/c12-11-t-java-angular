import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuMenuComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() price!: number;

  truncateTextMobile() {
    if (this.description.length <= 60) {
      return this.description
    }
    return this.description.substring(0, 60) + '...'
  }

  truncateTextDektop() {
    if (this.description.length <= 200) {
      return this.description
    }
    return this.description.substring(0, 200) + '...'
  }
}

export interface Card {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

