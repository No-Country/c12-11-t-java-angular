import {Component, Input} from '@angular/core';
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.scss']
})
export class ButtonCounterComponent {
  faPlus = faPlus
  faMinus = faMinus
  @Input() minValue!: number;
  @Input() maxValue!: number;
  @Input() value: number = 0;

  incrementValue() {
    this.value++
    this.value = Math.min(this.value, this.maxValue)
  }

  decrementValue() {
    this.value--
    this.value = Math.max(this.value, this.minValue)
  }
}

export interface ButtonFilter {
  minValue: number;
  maxValue: number;
}
