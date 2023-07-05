import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuMenuComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() stars!: number;
  @Input() imageUrl!: string;
  @Input() timeMin!: number;
  @Input() timeMax!: number;
  @Input() price!: number;
}

export interface Card {
  id: number;
  title: string;
  stars: number;
  imageUrl: string;
  timeMin: number;
  timeMax: number;
  price: number;
}

