import {Component, Input, OnInit} from '@angular/core';

import {select, Store} from "@ngrx/store";
import {
  removeFilters,
  toggleFilterSinTacc,
  toggleFilterVegano,
  updateFilterByCategory
} from "@modules/container/store/actions/filters.actions";
import {selectFilters, selectMenu} from "@modules/container/store/selectors/menu.selectors";
import {MenuState} from "@modules/container/store/state/menu.state";
import {setMenu} from "@modules/container/store/actions/menu.actions";


@Component({
  selector: 'app-group-button-filter-menu',
  templateUrl: './group-button-filter-menu.component.html',
  styleUrls: ['./group-button-filter-menu.component.scss']
})
export class GroupButtonFilterMenuComponent implements OnInit {
  @Input() filtersMenu?: string[];
  @Input() filtersCategories?: string[];

  menu = ''
  category = ''

  filter: Filters = {
    activateFilterSinTacc: false,
    activateFilterVegano: false,
    activateFilterByCategory: '',
    activateFilters: true,
    activateFilterSearchTerm: ''
  }


  constructor(private menuStore: Store<MenuState>) {

  }

  ngOnInit(): void {
    this.menuStore.pipe(select(selectFilters)).subscribe(filters => {
      this.filter = filters
      this.category = filters.activateFilterByCategory
    });
    this.menuStore.pipe(select(selectMenu)).subscribe(menuName => {
      this.menu = menuName
    });
  }

  isMenuSelected(menuName: string) {
    return menuName === this.menu
  }

  toggleMenu(name: string): void {
    this.menuStore.dispatch(setMenu({menuName: name}));
  }

  toggleCategory(name: string): void {
    this.menuStore.dispatch(updateFilterByCategory({filterNames: name}));
  }

  toggleVegano(): void {
    this.menuStore.dispatch(toggleFilterVegano())

  }

  toggleSinTacc(): void {
    this.menuStore.dispatch(toggleFilterSinTacc())
  }

  toggleViewAll(): void {
    this.menuStore.dispatch(removeFilters())
  }

}

export interface Filters {
  activateFilterSinTacc: boolean;
  activateFilterVegano: boolean;
  activateFilterByCategory: string;
  activateFilterSearchTerm: string;
  activateFilters: boolean;
}
