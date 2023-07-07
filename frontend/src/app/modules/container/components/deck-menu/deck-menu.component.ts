import {Component, Input} from '@angular/core';
import {Plate} from "@shared/interfaces/plate.interface";

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.component.html',
  styleUrls: ['./deck-menu.component.scss']
})
export class DeckMenuComponent {
  @Input() plateType!: PlateType;
}

export interface PlateType {
  name: string;
  plates: Array<Plate>;
}
