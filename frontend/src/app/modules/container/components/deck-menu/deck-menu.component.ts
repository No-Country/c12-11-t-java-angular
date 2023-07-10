import {Component, Input} from '@angular/core';
import {MenuPlate} from '@shared/interfaces/menu-plate.interface';
import {PlatoFilterService} from '@shared/services/filter-plato-service/plato-filter.service';
import {Plato} from '@shared/interfaces/plato.interface';

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.component.html',
  styleUrls: ['./deck-menu.component.scss'],
  providers: [PlatoFilterService]
})
export class DeckMenuComponent {
  @Input() menu!: MenuPlate;
  @Input() searchTerm!: string;
  @Input() activeFilterVegano!: boolean;
  @Input() activeFilterSinTacc!: boolean;
  @Input() activeFiltersTerm!: boolean;
  @Input() activeFilters!: boolean;
  @Input() activeFiltersNames!: string[];


  platosFiltered: Plato[] = [];
  hasPlatosFiltrados = true;

  constructor(public platoFilterService: PlatoFilterService) {
  }

  ngOnInit(): void {

    this.platosFiltered = this.menu.plates;
    if (this.activeFilters) {
      if (this.activeFiltersTerm) {
        this.platosFiltered = this.platoFilterService.filterPlatesByTerm(this.platosFiltered, this.searchTerm);
      }
      if (this.activeFilterVegano) {
        this.platosFiltered = this.platoFilterService.filterPlatesByVegan(this.platosFiltered, this.activeFilterVegano);
      }
      if (this.activeFilterSinTacc) {
        this.platosFiltered = this.platoFilterService.filterPlatesBySinTACC(this.platosFiltered, this.activeFilterSinTacc);
      }

      if (this.activeFiltersNames.length > 0) {
        this.platosFiltered = this.platoFilterService.filterPlatesByNames(this.platosFiltered, this.activeFiltersNames);
      }
    }
    this.hasPlatosFiltrados = this.platosFiltered.length > 0;

  }
}
