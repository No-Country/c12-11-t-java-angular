import {Component} from '@angular/core';
import {faCartShopping, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {Location} from "@angular/common";
import {MenuService} from "@shared/services/menu-service/menu.service";
import {PlatoFilterService} from "@shared/services/filter-plato-service/plato-filter.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  faChevronLeft = faChevronLeft
  faCart = faCartShopping

  //Tiene algo en el carrito? -> NgRX -> Getter a Store + Mutations(Reducer) | Consultar Store
  isButtonSuccessDisabled = false

  searchTerm = ''
  activeFilterSinTacc = false
  activeFilterVegano = false

  constructor(private location: Location, public menuService: MenuService, private filterService: PlatoFilterService) {
  }

  updateMenuFilterService(newValue: string): void {
    this.searchTerm = newValue
  }

  updateActiveFilterSinTacc(value: boolean) {
    console.log("sin tacc" + value)
    this.activeFilterSinTacc = value
  }

  updateActiveFilterVegano(value: boolean) {
    console.log("vegano" + value)
    this.activeFilterVegano = value
  }


}
