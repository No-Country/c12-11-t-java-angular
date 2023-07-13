import {Component} from '@angular/core';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {MenuState} from "@modules/container/store/state/menu.state";
import {Store} from "@ngrx/store";
import {updateFilterBySearch} from "@modules/container/store/actions/filters.actions";

@Component({
  selector: 'app-input-search-menu',
  templateUrl: './input-search-menu.component.html',
  styleUrls: ['./input-search-menu.component.scss']
})
export class InputSearchMenuComponent {
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private storeMenu: Store<MenuState>) {
  }

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.storeMenu.dispatch(updateFilterBySearch({searchTerm: inputValue}))
  }

}
