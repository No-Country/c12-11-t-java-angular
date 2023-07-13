import {Injectable} from '@angular/core';
import {MenuPlate} from "@shared/interfaces/menu-plate.interface";
import {PlatoFilterService} from "@shared/services/filter-plato-service/plato-filter.service";
import {Plate} from "@shared/interfaces/plate.interface";
import {select, Store} from "@ngrx/store";
import {MenuState} from "@modules/container/store/state/menu.state";
import {selectMenu, selectPlates} from "@modules/container/store/selectors/menu.selectors";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  plates: Plate[] = []

  constructor(private platoFilterService: PlatoFilterService, private store: Store<MenuState>) {
    this.store.pipe(select(selectMenu)).subscribe(menuName => {
      this._tipoPlato = menuName
    })
    this.store.pipe(select(selectPlates)).subscribe(plates => {
      this.plates = plates
    })
  }

  private _tipoPlato = ''

  get tipoPlato(): string {
    return this._tipoPlato;
  }

  set tipoPlato(value: string) {
    this._tipoPlato = value;
  }


  /**
   * Obtiene todos los tipos de plato disponibles.
   * @returns Un array de strings con los tipos de plato únicos.
   * Nota: Si no se especifica un tipo de plato válido, se devuelven todos los tipos de plato existentes.
   */
  getAllTipoPlato() {
    return [...new Set(this.plates.map(menu => menu.tipoPlato))];
  }

  /**
   * Obtiene los nombres únicos de los platos según el tipo de plato actual.
   * @returns Un array de strings con los nombres únicos de los platos filtrados por el tipo de plato actual.
   */
  getPlateNamesByTipoPlato() {
    const platosFiltrados = this.platoFilterService.filterPlatesByPlateType(this.plates, this._tipoPlato);
    return [...new Set(platosFiltrados.map(menu => menu.nombre))];
  }

  /**
   * Crea un menú en base al tipo de plato ingresado y devuelve un array de objetos MenuPlate.
   * @param tipoPlato El tipo de plato para filtrar los platos del menú.
   * @returns Un array de objetos MenuPlate generado en base a los platos con el mismo nombre.
   */
  createMenu(tipoPlato: string = ''): MenuPlate[] {
    return this.getPlateNamesByTipoPlato().map(name => this.createMenuPlate(name));
  }

  /**
   * Crea un objeto MenuPlate en base al nombre del plato y los platos correspondientes.
   * @param name El nombre del plato para el menú.
   * @returns Un objeto MenuPlate con el nombre del plato y los platos correspondientes.
   */
  createMenuPlate(name: string): MenuPlate {
    return {
      name: name,
      plates: this.platoFilterService.filterPlatesByName(this.plates, name)
    };
  }

}
