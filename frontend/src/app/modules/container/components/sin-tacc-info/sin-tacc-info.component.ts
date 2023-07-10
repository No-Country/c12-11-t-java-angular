import {Component, Input} from '@angular/core';
import {faSlash, faWheatAlt, faWheatAwnCircleExclamation} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sin-tacc-info',
  templateUrl: './sin-tacc-info.component.html',
  styleUrls: ['./sin-tacc-info.component.scss']
})
export class SinTaccInfoComponent {
  @Input() isSinTacc!: boolean
  iconConTacc = faWheatAwnCircleExclamation
  iconSinTacc = faWheatAlt
  iconSlash = faSlash
}
