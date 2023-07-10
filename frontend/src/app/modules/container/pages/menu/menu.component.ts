import {Component} from '@angular/core';
import {faCartShopping, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {Location} from "@angular/common";
import {MenuService} from "@shared/services/menu-service/menu.service";
import {PlatoFilterService} from "@shared/services/filter-plato-service/plato-filter.service";

@Component({
  selector: 'app-menu', templateUrl: './menu.component.html', styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  faChevronLeft = faChevronLeft
  faCart = faCartShopping

  //Tiene algo en el carrito? -> NgRX -> Getter a Store + Mutations(Reducer) | Consultar Store
  isButtonSuccessDisabled = false

  searchTerm = ''
  activeFilterSinTacc = false
  activeFilterVegano = false
  activeFilterSearchTerm = false
  viewAll = true


  constructor(private location: Location, public menuService: MenuService, private filterService: PlatoFilterService) {
  }

  updateSearchTermFilter(newValue: string): void {
    this.searchTerm = newValue
    this.activeFilterSearchTerm = this.searchTerm.trim() !== ''
  }

  updateActiveFilterSinTacc(value: boolean): void {
    this.activeFilterSinTacc = value
  }

  updateActiveFilterVegano(value: boolean): void {
    this.activeFilterVegano = value
  }

  updateViewAll(value: boolean): void {
    this.viewAll = value
  }

}
