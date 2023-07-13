import {Component, Input, OnInit} from '@angular/core';

import {select, Store} from "@ngrx/store";
import {
  removeFilters,
  toggleFilterSinTacc,
  toggleFilterVegano,
  updateFilterByNames
} from "@modules/container/store/actions/filters.actions";
import {selectFilters} from "@modules/container/store/selectors/menu.selectors";
import {MenuState} from "@modules/container/store/state/menu.state";


@Component({
  selector: 'app-group-button-filter-menu',
  templateUrl: './group-button-filter-menu.component.html',
  styleUrls: ['./group-button-filter-menu.component.scss']
})
export class GroupButtonFilterMenuComponent implements OnInit {
  @Input() filtersNames?: string[];

  filter: Filters = {

    activateFilterSinTacc: false,
    activateFilterVegano: false,
    activateFilterByNames: [],
    activateFilters: true,
    activateFilterSearchTerm: ''
  }


  constructor(private menuStore: Store<MenuState>) {

  }

  ngOnInit(): void {
    this.menuStore.pipe(select(selectFilters)).subscribe(filters => {
      this.filter = filters
    });
  }

  toggleNames(name: string): void {
    let filterNames = [...this.filter.activateFilterByNames]; // Crear una copia del array existente

    if (filterNames.includes(name)) {
      filterNames = filterNames.filter(oneName => oneName !== name);
    } else {
      filterNames.push(name); // Agregar el nuevo nombre a la copia del array
    }

    this.filter = {...this.filter, activateFilterByNames: filterNames}

    this.menuStore.dispatch(updateFilterByNames({filterNames: this.filter.activateFilterByNames}));
  }

  toggleVegano(event: Event): void {
    this.menuStore.dispatch(toggleFilterVegano())

  }

  toggleSinTacc(event: Event): void {
    this.menuStore.dispatch(toggleFilterSinTacc())
  }

  toggleViewAll(event: Event): void {
    this.menuStore.dispatch(removeFilters())
  }

}

export interface Filters {
  activateFilterSinTacc: boolean;
  activateFilterVegano: boolean;
  activateFilterByNames: string[];
  activateFilterSearchTerm: string;
  activateFilters: boolean;
}
