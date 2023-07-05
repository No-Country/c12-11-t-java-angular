import {Component, Input} from '@angular/core';
import {ButtonFilter} from "@modules/container/components/button-filter-menu/button-filter-menu.component";

@Component({
  selector: 'app-group-button-filter-menu',
  templateUrl: './group-button-filter-menu.component.html',
  styleUrls: ['./group-button-filter-menu.component.scss']
})
export class GroupButtonFilterMenuComponent {
  @Input() filters: Array<ButtonFilter> = [];
}
