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

  platosFiltered: Plato[] = [];
  hasPlatosFiltrados = true;

  constructor(public platoFilterService: PlatoFilterService) {
  }

  ngOnInit(): void {

    this.platosFiltered = this.menu.plates;

    if (this.activeFilters && this.activeFiltersTerm) {
      this.platosFiltered = this.platoFilterService.filterPlatesByTerm(this.platosFiltered, this.searchTerm);
    }
    if (this.activeFilters && this.activeFilterVegano) {
      this.platosFiltered = this.platoFilterService.filterPlatesByVegan(this.platosFiltered, this.activeFilterVegano);
    }
    if (this.activeFilters && this.activeFilterSinTacc) {
      this.platosFiltered = this.platoFilterService.filterPlatesBySinTACC(this.platosFiltered, this.activeFilterSinTacc);
    }

    this.hasPlatosFiltrados = this.platosFiltered.length > 0;

  }
}
