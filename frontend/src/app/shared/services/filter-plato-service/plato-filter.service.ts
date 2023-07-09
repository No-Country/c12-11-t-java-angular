import {Injectable} from '@angular/core';
import {Plato} from "@shared/interfaces/plato.interface";

@Injectable({
  providedIn: 'root'
})
export class PlatoFilterService {
  termSearch = '';
  platos: Plato[] = [];

  isNoTACC: boolean = false
  isVegano: boolean = true

  constructor() {
  }

  updateSearchTerm(newValue: string): void {
    this.termSearch = newValue;
  }


  getPlatesFiltered(): Plato[] {
    let platesFiltered = this.platos.filter(plate => this.hasPlatoSimilarTerm(plate, this.termSearch));
    if (this.isVegano) {
      platesFiltered = platesFiltered.filter(plate => this.isPlatoVegano(plate))
    }
    if (this.isNoTACC) {
      platesFiltered = platesFiltered.filter(plate => this.isPlatoSinTACC(plate))
    }
    return platesFiltered;
  }

  private hasPlatoSimilarTerm(plato: Plato, searchTerm: string) {
    let conditions = [
      this.hasPlatoSimilarName,
      this.hasPlatoSimilarType,
      this.hasPlatoSimilarDescription,
      this.hasPlatoSimilarSurname
    ];

    return conditions.some(condition => condition(plato, searchTerm));
  }

  private hasPlatoSimilarName(plato: Plato, searchTerm: string) {
    return plato.nombre.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private hasPlatoSimilarSurname(plato: Plato, searchTerm: string) {
    return plato.apellido.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private hasPlatoSimilarType(plato: Plato, searchTerm: string) {
    return plato.tipoPlato.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private hasPlatoSimilarDescription(plato: Plato, searchTerm: string) {
    return plato.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private isPlatoVegano(plato: Plato) {
    return plato.vegano === this.isVegano;
  }

  private isPlatoSinTACC(plato: Plato) {
    return plato.sinTACC === this.isNoTACC;
  }
}
