import {Component, Input} from '@angular/core';
import {Plate} from "@shared/interfaces/plate.interface";
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {AppState} from "../../../../store/state/app.state";
import {Store} from "@ngrx/store";
import {addOrderToCart} from "../../../../store/actions/shoppin-card.actions";

@Component({
  selector: 'app-card-plate',
  templateUrl: './card-plate.component.html',
  styleUrls: ['./card-plate.component.scss']
})
export class CardPlateMenuComponent {
  @Input() plate!: Plate;
  @Input() truncate: boolean = true;

  faPlus = faPlus

  constructor(private appStore: Store<AppState>) {

  }


  addCart() {
    this.appStore.dispatch(addOrderToCart({
      order: {
        plate: this.plate,
        count: 1,
        totalParcial: this.plate.precio,
      }
    }))
  }
}


