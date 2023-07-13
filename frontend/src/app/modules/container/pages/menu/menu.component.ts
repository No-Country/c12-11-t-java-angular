import {Component, OnInit} from '@angular/core';
import {faCartShopping, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {Location} from "@angular/common";
import {MenuService} from "@shared/services/menu-service/menu.service";
import {MenuState} from "@modules/container/store/state/menu.state";
import {select, Store} from "@ngrx/store";
import {loadMenu} from "@modules/container/store/actions/menu.actions";
import {PlateService} from "@shared/services/plate.service";
import {loadPlates, loadPlatesFailure, loadPlatesSuccess} from "@modules/container/store/actions/plates.actions";
import {selectLoading} from "@modules/container/store/selectors/menu.selectors";

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

  menuName = 'Almuerzo y Cena' //TODO: Debe venir del navbar

  constructor(private location: Location, private menuStore: Store<MenuState>, public menuService: MenuService, public plateService: PlateService) {

  }

  ngOnInit(): void {
    this.menuStore.pipe(select(selectLoading)).subscribe(isLoad => {
      this.isLoading = isLoad
    });
    this.getPlateList()
    this.menuStore.dispatch(loadMenu({menuName: this.menuName}))
  }

  getPlateList() {
    let plates = []
    this.menuStore.dispatch(loadPlates())
    this.plateService.listarPlatos()
      .subscribe({
        next: (rpta) => {
          plates = rpta
          console.log("rpta =>", rpta)
          this.menuStore.dispatch(loadPlatesSuccess({plates: plates}))
        },
        error: (message) => {
          console.log("error =>", message);
          this.menuStore.dispatch(loadPlatesFailure(message))
        }
      })

  }

}
