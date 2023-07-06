import {Component} from '@angular/core';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-input-search-menu',
  templateUrl: './input-search-menu.component.html',
  styleUrls: ['./input-search-menu.component.scss']
})
export class InputSearchMenuComponent {
  faMagnifyingGlass = faMagnifyingGlass;
}
