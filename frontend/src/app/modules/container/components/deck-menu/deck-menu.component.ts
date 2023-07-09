import {Component, Input,  OnInit} from '@angular/core';

import {MenuPlate} from "@shared/interfaces/menu-plate.interface";
import {PlatoFilterService} from "@shared/services/filter-plato-service/plato-filter.service";
import {Plato} from "@shared/interfaces/plato.interface";

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.component.html',
  styleUrls: ['./deck-menu.component.scss'],
  providers: [PlatoFilterService]
})
export class DeckMenuComponent implements OnInit {
  @Input() menu!: MenuPlate;
  @Input() searchTerm!: string;

  platosFiltered: Plato[] = [];
  hasPlatosFiltrados = false;

  constructor(public platoFilterService: PlatoFilterService) {

  }

  ngOnInit(): void {
    //Inicializo platos en el service
    this.platoFilterService.platos = this.menu.plates;
    //updateo la busqueda
    this.platoFilterService.updateSearchTerm(this.searchTerm)
    //Asigno los platos filtrados
    this.platosFiltered = this.platoFilterService.getPlatesFiltered()
    //Si tiene platos se rende
    this.hasPlatosFiltrados = this.platosFiltered.length > 0
  }


}
