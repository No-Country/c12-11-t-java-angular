import {Component, Input} from '@angular/core';
import {PlatoFilterService} from '@shared/services/filter-plato-service/plato-filter.service';
import {Plate} from "@shared/interfaces/plate.interface";
import {select, Store} from "@ngrx/store";
import {selectFilters} from "@modules/container/store/selectors/menu.selectors";
import {MenuState} from "@modules/container/store/state/menu.state";
import {Filters} from "@modules/container/components/group-button-filter-menu/group-button-filter-menu.component";
import {
  filterPlatesByCategory,
  filterPlatesBySinTACC,
  filterPlatesByTerm,
  filterPlatesByVegan
} from "@modules/container/store/reducers/helpers/filters.helpers";
import {MenuPlate} from "@shared/interfaces/menu-plate.interface";

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.component.html',
  styleUrls: ['./deck-menu.component.scss'],
  providers: [PlatoFilterService]
})
export class DeckMenuComponent {

  @Input() menu!: MenuPlate;

  filters: Filters = {
    /** @Deprecated */
    activateFilterSinTacc: false,
    /** @Deprecated */
    activateFilterVegano: false,
    activateFilterByCategory: '',
    activateFilters: true,
    activateFilterSearchTerm: ''
  }
  plates: Plate[] = []
  renderDeck: boolean = true

  constructor(private menuStore: Store<MenuState>) {

  }


  ngOnInit(): void {
    this.menuStore.pipe(select(selectFilters)).subscribe(filters => {
      this.filters = filters
      this.plates = this.filterPlates(this.menu.plates)
    });

  }

  private filterPlates(plates: Plate[]) {
    let platosFiltered = plates;

    if (this.filters.activateFilters) {
      if (this.filters.activateFilterSearchTerm.length > 0) {
        platosFiltered = filterPlatesByTerm(platosFiltered, this.filters.activateFilterSearchTerm);
      }
      /** @Deprecated */
      if (this.filters.activateFilterVegano) {
        platosFiltered = filterPlatesByVegan(platosFiltered, this.filters.activateFilterVegano);
      }

      /** @Deprecated */
      if (this.filters.activateFilterSinTacc) {
        platosFiltered = filterPlatesBySinTACC(platosFiltered, this.filters.activateFilterSinTacc);
      }

      if (this.filters.activateFilterByCategory.length > 0) {
        platosFiltered = filterPlatesByCategory(platosFiltered, this.filters.activateFilterByCategory);
      }
    }

    this.renderDeck = platosFiltered.length > 0;
    return platosFiltered
  }

}
