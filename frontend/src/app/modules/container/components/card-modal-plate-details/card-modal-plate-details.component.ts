import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Plate} from "@shared/interfaces/plate.interface";

@Component({
  selector: 'app-card-modal-plate-details',
  templateUrl: './card-modal-plate-details.component.html',
  styleUrls: ['./card-modal-plate-details.component.scss']
})
export class CardModalPlateDetailsComponent {
  @Input() plate!: Plate
  private modalService = inject(NgbModal);

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }
}
