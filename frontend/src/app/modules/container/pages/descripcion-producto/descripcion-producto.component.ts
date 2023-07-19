import {Component} from '@angular/core';
import {Plate} from "@shared/interfaces/plate.interface";
import {MenuState} from "@modules/container/store/state/menu.state";
import {selectPlateSelected} from "@modules/container/store/selectors/menu.selectors";
import {CartActions} from "../../../../store/actions/cart.actions";

import {select, Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.scss']
})
export class DescripcionProductoComponent {
  plate?: Plate
  showPlate: boolean = false
  count: number = 1

  constructor(private menuStore: Store<MenuState>, private appStore: Store, private router: Router) {
    this.menuStore.pipe(select(selectPlateSelected)).subscribe(plate => {
      this.plate = plate ?? undefined;
      this.showPlate = plate !== undefined;
    });
  }

  addCart() {
    this.appStore.dispatch(CartActions.addOrder({
      order: {
        plate: this.plate!,
        count: this.count,
        totalParcial: this.count * this.plate!.precio,
      }
    }))
    this.router.navigateByUrl('/container/menu');

  }


}
