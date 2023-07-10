import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Plato} from "@shared/interfaces/plato.interface";
import {faLeaf, faSlash, faWheatAlt, faWheatAwnCircleExclamation} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card-modal-plate-details',
  templateUrl: './card-modal-plate-details.component.html',
  styleUrls: ['./card-modal-plate-details.component.scss']
})
export class CardModalPlateDetailsComponent {
  @Input() plate!: Plato
  iconConTacc = faWheatAwnCircleExclamation
  iconSinTacc = faWheatAlt
  iconVegano = faLeaf
  iconSlash = faSlash
  private modalService = inject(NgbModal);

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }
}
