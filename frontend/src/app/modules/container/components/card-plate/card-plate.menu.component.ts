import {Component, Input} from '@angular/core';
import {Plate} from "@shared/interfaces/plate.interface";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card-plate',
  templateUrl: './card-plate.component.html',
  styleUrls: ['./card-plate.component.scss']
})
export class CardPlateMenuComponent {
  @Input() plate!: Plate;
  @Input() truncate: boolean = true;

  faPlus = faPlus


  addCart() {
    console.log("Se debe agregar al carrito")
  }
}


