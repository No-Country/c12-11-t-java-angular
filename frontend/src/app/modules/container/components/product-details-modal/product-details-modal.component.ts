import {Component, inject, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "@modules/container/components/card-menu/card-menu.menu.component";

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.scss']
})
export class ProductDetailsModalComponent {
  @Input() product!: Product
  private modalService = inject(NgbModal);

  open(content: any) {
    this.modalService.open(content, {size: 'lg'})
  }
}
