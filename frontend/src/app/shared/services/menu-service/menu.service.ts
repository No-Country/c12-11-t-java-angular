import {Injectable} from '@angular/core';
import {MenuPlate} from "@shared/interfaces/menu-plate.interface";
import {Plate} from "@shared/interfaces/plate.interface";
import {select, Store} from "@ngrx/store";
import {MenuState} from "@modules/container/store/state/menu.state";
import {selectMenu, selectPlates} from "@modules/container/store/selectors/menu.selectors";
import {filterPlatesByCategory, filterPlatesByType} from "@shared/utils/helpers/filters.helpers";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  plates: Plate[] = []
  tipoMenu = ''

  constructor(private store: Store<MenuState>) {
    this.store.pipe(select(selectMenu)).subscribe(menuName => {
      console.log(menuName)
      this.tipoMenu = menuName
    })
    this.store.pipe(select(selectPlates)).subscribe(plates => {
      this.plates = plates
    })
  }


  getTipoMenu() {
    return [...new Set(this.plates.map(menu => menu.tipoPlato))];
  }

  getCategories() {
    const platosFiltrados = filterPlatesByType(this.plates, this.tipoMenu);
    return [...new Set(platosFiltrados.map(menu => menu.categoria))];
  }

  /**
   * Crea un menú en base al tipo de plato ingresado y devuelve un array de objetos MenuPlate.
   * @param tipoPlato El tipo de plato para filtrar los platos del menú.
   * @returns Un array de objetos MenuPlate generado en base a los platos con el mismo nombre.
   */
  createMenu(tipoPlato: string = ''): MenuPlate[] {
    return this.getCategories().map(name => this.createMenuPlate(name));
  }

  /**
   * Crea un objeto MenuPlate en base al nombre del plato y los platos correspondientes.
   * @param name El nombre del plato para el menú.
   * @returns Un objeto MenuPlate con el nombre del plato y los platos correspondientes.
   */
  createMenuPlate(name: string): MenuPlate {
    return {
      name: name,
      plates: filterPlatesByCategory(this.plates, name)
    };
  }

}
