import {Component, Input, OnInit} from '@angular/core';

import {select, Store} from "@ngrx/store";
import {FilterActions} from "@modules/container/store/actions/filters.actions";
import {selectFilters, selectMenu} from "@modules/container/store/selectors/menu.selectors";
import {MenuActions} from "@modules/container/store/actions/menu.actions";


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


  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.pipe(select(selectFilters)).subscribe(filters => {
      this.filter = filters
      this.category = filters.activateFilterByCategory
    });
    this.store.pipe(select(selectMenu)).subscribe(menuName => {
      this.menu = menuName
    });
  }

  isMenuSelected(menuName: string) {
    return menuName === this.menu
  }

  toggleMenu(name: string): void {
    this.store.dispatch(MenuActions.setMenu({menuName: name}));
  }

  toggleCategory(name: string): void {
    this.store.dispatch(FilterActions.updateByCategory({filterNames: name}));
  }

  toggleVegano(): void {
    this.store.dispatch(FilterActions.toggleVegano())

  }

  toggleSinTacc(): void {
    this.store.dispatch(FilterActions.toggleSinTacc())
  }

  toggleViewAll(): void {
    this.store.dispatch(FilterActions.removeAll())
  }

}

export interface Filters {
  activateFilterSinTacc: boolean;
  activateFilterVegano: boolean;
  activateFilterByCategory: string;
  activateFilterSearchTerm: string;
  activateFilters: boolean;
}
