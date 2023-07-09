import {Component, Input} from '@angular/core';
import {Plato} from "@shared/interfaces/plato.interface";

@Component({
  selector: 'app-card-plate',
  templateUrl: './card-plate.component.html',
  styleUrls: ['./card-plate.component.scss']
})
export class CardPlateMenuComponent {
  @Input() plate!: Plato;
  @Input() truncate: boolean = true;

  addCart() {
    console.log("Se debe agregar al carrito")
  }
}


