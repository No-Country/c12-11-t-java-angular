import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-group-button-filter-menu',
  templateUrl: './group-button-filter-menu.component.html',
  styleUrls: ['./group-button-filter-menu.component.scss']
})
export class GroupButtonFilterMenuComponent {
  @Input() filters?: string[];

  @Output() toggleSinTaccChanged = new EventEmitter<boolean>();
  @Output() toggleVeganoChanged = new EventEmitter<boolean>();

  activateSinTacc = false
  activateVegano = false


  toggleVegano(event: Event): void {
    this.activateVegano = !this.activateVegano;
    this.toggleVeganoChanged.emit(this.activateVegano);
  }

  toggleSinTacc(event: Event): void {
    this.activateSinTacc = !this.activateSinTacc;
    this.toggleSinTaccChanged.emit(this.activateSinTacc);
  }
}
