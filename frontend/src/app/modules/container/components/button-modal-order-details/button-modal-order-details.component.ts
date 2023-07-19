import {Component, inject, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {select, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {Cart} from "../../../../store/models/cart.model";
import {CartState} from "../../../../store/models/cart-state.model";
import {selectCart} from "../../../../store/selectors/cart.selectors";
import {CartActions} from "../../../../store/actions/cart.actions";


@Component({
  selector: 'app-button-modal-order-details',
  templateUrl: './button-modal-order-details.component.html',
  styleUrls: ['./button-modal-order-details.component.scss']
})
export class ButtonModalOrderDetailsComponent implements OnInit {

  faCart = faCartShopping
  faCartSuccess = faCheckCircle

  shoppingCart: Cart = {
    orders: [],
    total: 0,
    state: CartState.New
  }

  private modalService = inject(NgbModal);


  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectCart)).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart
    });
  }

  goToPayment() {
    this.modalService.dismissAll();
    this.store.dispatch(CartActions.setState({state: CartState.ReadyToPay}));
    this.router.navigateByUrl("/container/shopping");
  }

  open(content: any) {
    this.modalService.open(content, {
      scrollable: true,
      modalDialogClass: 'me-0 my-0',
    })
  }

}
