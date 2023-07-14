import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

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
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();


  emitValueChange() {
    this.valueChange.emit(this.value);
  }

  incrementValue() {
    this.value++
    this.value = Math.min(this.value, this.maxValue)
    this.emitValueChange()
  }

  decrementValue() {
    this.value--
    this.value = Math.max(this.value, this.minValue)
    this.emitValueChange()
  }
}

export interface ButtonFilter {
  minValue: number;
  maxValue: number;
}
