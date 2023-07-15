import {Component, OnInit} from '@angular/core';
import {faCartShopping, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {Location} from "@angular/common";
import {MenuService} from "@shared/services/menu-service/menu.service";
import {MenuState} from "@modules/container/store/state/menu.state";
import {select, Store} from "@ngrx/store";
import {setMenu} from "@modules/container/store/actions/menu.actions";
import {PlateService} from "@shared/services/plate.service";
import {selectLoading} from "@modules/container/store/selectors/menu.selectors";
import {AppState} from "../../../../store/state/app.state";
import {selectShoppingCart, selectShoppingCartState} from "../../../../store/selectors/app.selectors";
import {ShoppingCartState} from "@shared/enums/shopping-cart-state.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  faChevronLeft = faChevronLeft
  faCart = faCartShopping

  //Tiene algo en el carrito? -> NgRX -> Consultar Store Carrito
  isButtonSuccessDisabled = false

  isLoading = true

  menuName = 'Desayuno' //TODO: Debe venir del navbar

  constructor(private location: Location,
              private menuStore: Store<MenuState>,
              private appStore: Store<AppState>,
              public menuService: MenuService,
              public plateService: PlateService) {

  }

  ngOnInit(): void {
    this.menuStore.pipe(select(selectLoading)).subscribe(isLoad => {
      this.isLoading = isLoad
    });

    this.appStore.pipe(select(selectShoppingCart)).subscribe(cart => {
      console.log("state")
      console.log(cart)
    });

    this.appStore.pipe(select(selectShoppingCartState)).subscribe(state => {
      this.isButtonSuccessDisabled = state === ShoppingCartState.New
    });


    this.menuStore.dispatch(setMenu({menuName: this.menuName}))
  }


}
