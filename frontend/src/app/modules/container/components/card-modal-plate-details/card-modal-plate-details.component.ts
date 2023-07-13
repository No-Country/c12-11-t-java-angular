import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faLeaf, faSlash, faWheatAlt, faWheatAwnCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Plate} from "@shared/interfaces/plate.interface";

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

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }
}
