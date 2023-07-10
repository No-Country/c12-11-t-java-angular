import {Injectable} from '@angular/core';
import {Plato} from "@shared/interfaces/plato.interface";

@Injectable({
  providedIn: 'root'
})
export class PlatoFilterService {
  constructor() {
  }

  /**
   * Filtra los platos según el nombre especificado y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param nombre El nombre del plato utilizado para filtrar.
   * @returns Un array de objetos Plato filtrados por el nombre especificado.
   */
  filterPlatesByNombre(plates: Plato[], nombre: string) {
    if (nombre === '') {
      return plates
    }
    return plates.filter(menu => menu.nombre === nombre);
  }

  /**
   * Filtra los platos según el tipo de plato especificado y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param plateType El tipo de plato utilizado para filtrar.
   * @returns Un array de objetos Plato filtrados por el tipo de plato especificado.
   */
  public filterPlatesByPlateType(plates: Plato[], plateType: string) {
    return plates.filter(menu => menu.tipoPlato === plateType);
  }

  /**
   * Filtra los platos según si son veganos o no y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param isVegan Indica si se deben filtrar los platos veganos (true) o no veganos (false).
   * @returns Un array de objetos Plato filtrados por el estado de ser vegano o no.
   * Nota: -
   */
  public filterPlatesByVegan(plates: Plato[], isVegan: boolean): Plato[] {
    return plates.filter(plate => this.isPlatoVegano(plate, isVegan));
  }

  /**
   * Filtra los platos según si son aptos para personas con restricciones alimentarias (sin TACC) o no,
   * y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param isSinTACC Indica si se deben filtrar los platos sin TACC (true) o no sin TACC (false).
   * @returns Un array de objetos Plato filtrados por el estado de ser sin TACC o no.
   * Nota: TACC significa Trigo, Avena, Cebada y Centeno.
   */
  public filterPlatesBySinTACC(plates: Plato[], isSinTACC: boolean): Plato[] {
    return plates.filter(plate => this.isPlatoSinTACC(plate, isSinTACC));
  }

  /**
   * Filtra los platos según un término de búsqueda y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param termSearch El término de búsqueda para filtrar los platos.
   * @returns Un array de objetos Plato filtrados por el término de búsqueda.
   * Nota: -
   */
  public filterPlatesByTerm(plates: Plato[], termSearch: string): Plato[] {
    return plates.filter(plate => this.hasPlatoSimilarTerm(plate, termSearch));
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
    return plato.subTipoPlato.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private hasPlatoSimilarType(plato: Plato, searchTerm: string) {
    return plato.tipoPlato.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private hasPlatoSimilarDescription(plato: Plato, searchTerm: string) {
    return plato.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private isPlatoVegano(plato: Plato, isVegan: boolean) {
    return plato.vegano === isVegan;
  }

  private isPlatoSinTACC(plato: Plato, isNoTacc: boolean) {
    return plato.sinTACC === isNoTacc;
  }
}
