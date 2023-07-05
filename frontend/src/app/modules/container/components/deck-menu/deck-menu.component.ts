import {Component, Input} from '@angular/core';
import {Card} from "@modules/container/components/card-menu/card-menu.menu.component";

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.component.html',
  styleUrls: ['./deck-menu.component.scss']
})
export class DeckMenuComponent {
  @Input() title!: string;
  @Input() food!: Array<Card>;
}

export interface Deck {
  title: string;
  food: Array<Card>;
}
