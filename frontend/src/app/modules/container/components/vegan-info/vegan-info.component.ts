import {Component, Input} from '@angular/core';
import {faLeaf, faSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-vegan-info',
  templateUrl: './vegan-info.component.html',
  styleUrls: ['./vegan-info.component.scss']
})
export class VeganInfoComponent {
  @Input() isVegan!: boolean
  iconVegano = faLeaf
  iconSlash = faSlash
}
