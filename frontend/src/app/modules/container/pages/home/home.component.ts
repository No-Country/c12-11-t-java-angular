import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeSearch = new FormControl('');

  faMagnifyingGlass = faMagnifyingGlass;
}
