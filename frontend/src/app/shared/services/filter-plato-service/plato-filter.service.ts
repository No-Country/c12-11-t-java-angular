import {Injectable} from '@angular/core';
import {Plate} from "@shared/interfaces/plate.interface";

@Injectable({
  providedIn: 'root'
})
export class PlatoFilterService {

  /**
   * Filtra los platos según el nombre especificado y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param nombre El nombre del plato utilizado para filtrar.
   * @returns Un array de objetos Plato filtrados por el nombre especificado.
   */
  filterPlatesByCategoria(plates: Plate[], categoria: string) {
    if (categoria === '') {
      return plates
    }
    return plates.filter(menu => menu.categoria === categoria);
  }

  /**
   Filtra los platos según los nombres especificados y devuelve un array de objetos Plato.
   @param plates El array de platos a filtrar.
   @param names El array de nombres de platos utilizados para filtrar.
   @returns Un array de objetos Plato filtrados por los nombres especificados.
   */
  filterPlatesByNames(plates: Plate[], names: string[]) {
    if (names.length === 0) {
      return plates;
    }

    return plates.filter(menu => names.includes(menu.nombre));

  }

  /**
   * Filtra los platos según el tipo de plato especificado y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param plateType El tipo de plato utilizado para filtrar.
   * @returns Un array de objetos Plato filtrados por el tipo de plato especificado.
   */
  public filterPlatesByPlateType(plates: Plate[], plateType: string) {
    return plates.filter(menu => menu.tipoPlato === plateType);
  }

  /**
   * Filtra los platos según si son veganos o no y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param isVegan Indica si se deben filtrar los platos veganos (true) o no veganos (false).
   * @returns Un array de objetos Plato filtrados por el estado de ser vegano o no.
   * Nota: -
   */
  public filterPlatesByVegan(plates: Plate[], isVegan: boolean): Plate[] {
    return plates.filter(plate => this.isPlatoVegano(plate, isVegan));
  }

  /** @Deprecated
   * Filtra los platos según si son aptos para personas con restricciones alimentarias (sin TACC) o no,
   * y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param isSinTACC Indica si se deben filtrar los platos sin TACC (true) o no sin TACC (false).
   * @returns Un array de objetos Plato filtrados por el estado de ser sin TACC o no.
   * Nota: TACC significa Trigo, Avena, Cebada y Centeno.
   */
  public filterPlatesBySinTACC(plates: Plate[], isSinTACC: boolean): Plate[] {
    return plates.filter(plate => this.isPlatoSinTACC(plate, isSinTACC));
  }

  /*
   * Filtra los platos según un término de búsqueda y devuelve un array de objetos Plato.
   * @param plates El array de platos a filtrar.
   * @param termSearch El término de búsqueda para filtrar los platos.
   * @returns Un array de objetos Plato filtrados por el término de búsqueda.
   * Nota: -
   */
  public filterPlatesByTerm(plates: Plate[], termSearch: string): Plate[] {
    return plates.filter(plate => this.hasPlatoSimilarTerm(plate, termSearch));
  }


  private hasPlatoSimilarTerm(plato: Plate, searchTerm: string) {
    let conditions = [
      this.hasPlatoSimilarName,
      this.hasPlatoSimilarType,
      this.hasPlatoSimilarDescription,
      this.hasPlatoSimilarSurname
    ];

    return conditions.some(condition => condition(plato, searchTerm));
  }

  private hasPlatoSimilarName(plato: Plate, searchTerm: string) {
    return plato.nombre.toLowerCase().includes(searchTerm.toLowerCase());
  }


  private hasPlatoSimilarSurname(plato: Plate, searchTerm: string) {
    return plato.categoria ? plato.categoria.toLowerCase().includes(searchTerm.toLowerCase()) : false;
  }

  private hasPlatoSimilarType(plato: Plate, searchTerm: string) {
    return plato.tipoPlato.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private hasPlatoSimilarDescription(plato: Plate, searchTerm: string) {
    return plato.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
  }

  /**@Deprecated */
  private isPlatoVegano(plato: Plate, isVegan: boolean) {
    return plato.vegano === isVegan;
  }


  /**@Deprecated */
  private isPlatoSinTACC(plato: Plate, isNoTacc: boolean) {
    return plato.sinTACC === isNoTacc;
  }
}
