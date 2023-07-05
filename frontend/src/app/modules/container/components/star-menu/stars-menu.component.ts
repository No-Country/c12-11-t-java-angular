import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star-menu',
  templateUrl: './star-menu.component.html',
  styleUrls: ['./star-menu.component.scss']
})
export class StarsMenuComponent {
  @Input() filled: boolean = false;
}
