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
  @Output() toggleNameChanged = new EventEmitter<string[]>();
  @Output() toggleViewAllFilter = new EventEmitter<boolean>();

  activateSinTacc: boolean = false
  activateVegano: boolean = false
  activateNames: string[] = []
  activeViewAll: boolean = true

  toggleNames(name: string): void {
    if (this.activateNames.includes(name)) {
      this.activateNames = this.activateNames.filter(oneName => oneName !== name)
    } else {
      this.activateNames.push(name);
    }

    this.toggleNameChanged.emit(this.activateNames);
    if (this.activateNames.length > 0) {
      this.activateFilters()
    }
  }


  toggleVegano(event: Event): void {
    this.activateVegano = !this.activateVegano;
    this.toggleVeganoChanged.emit(this.activateVegano);
    if (this.activateVegano) {
      this.activateFilters()
    }
  }

  toggleSinTacc(event: Event): void {
    this.activateSinTacc = !this.activateSinTacc;
    this.toggleSinTaccChanged.emit(this.activateSinTacc);

    if (this.activateSinTacc) {
      this.activateFilters()
    }
  }

  toggleViewAll(event: Event): void {
    this.activeViewAll = true
    this.activateSinTacc = false
    this.activateVegano = false
    this.activateNames = []
    this.toggleVeganoChanged.emit(false);
    this.toggleSinTaccChanged.emit(false);
    this.toggleNameChanged.emit([]);
    this.toggleViewAllFilter.emit(this.activeViewAll);
  }

  activateFilters() {
    this.activeViewAll = false
    this.toggleViewAllFilter.emit(this.activeViewAll);
  }


}
