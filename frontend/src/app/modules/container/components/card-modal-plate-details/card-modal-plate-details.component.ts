import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faLeaf, faSlash, faWheatAlt, faWheatAwnCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Plate} from "@shared/interfaces/plate.interface";
import {addOrderToCart} from "../../../../store/actions/shoppin-card.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/state/app.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-modal-plate-details',
  templateUrl: './card-modal-plate-details.component.html',
  styleUrls: ['./card-modal-plate-details.component.scss']
})
export class CardModalPlateDetailsComponent {
  @Input() plate!: Plate
  iconConTacc = faWheatAwnCircleExclamation
  iconSinTacc = faWheatAlt
  iconVegano = faLeaf
  iconSlash = faSlash
  private modalService = inject(NgbModal);

  count: number = 1

  constructor(private appStore: Store<AppState>, private router: Router) {
  }

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }

  onCountChange(newValue: number) {
    console.log("cambiando")
    this.count = newValue;
  }

  addCart() {
    this.appStore.dispatch(addOrderToCart({
      order: {
        plate: this.plate,
        count: this.count,
        totalParcial: this.count * this.plate.precio,
      }
    }))
    this.router.navigateByUrl('/container/menu');
    this.modalService.dismissAll('Save click');
  }
}
