import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "@modules/container/components/card-plate/card-plate.menu.component";

@Component({
  selector: 'app-card-modal-plate-details',
  templateUrl: './card-modal-plate-details.component.html',
  styleUrls: ['./card-modal-plate-details.component.scss']
})
export class CardModalPlateDetailsComponent {
  @Input() product!: Product
  private modalService = inject(NgbModal);

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }
}
