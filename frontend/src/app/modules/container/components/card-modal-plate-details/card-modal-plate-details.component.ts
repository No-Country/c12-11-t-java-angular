import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faLeaf, faSlash, faWheatAlt, faWheatAwnCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Plate} from "@shared/interfaces/plate.interface";
import {CartActions} from "../../../../store/actions/cart.actions";
import {Store} from "@ngrx/store";
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

  constructor(private store: Store, private router: Router) {
  }

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }

  onCountChange(newValue: number) {
    console.log("cambiando")
    this.count = newValue;
  }

  addCart() {
    this.store.dispatch(CartActions.addOrder({
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
