import {Plate} from "@shared/interfaces/plate.interface";


export const filterPlatesByType = (plates: Plate[], type: string): Plate[] => {
  return plates.filter(plate => isTypePlate(plate, type));
}

const isTypePlate = (plate: Plate, type: string) => plate.tipoPlato === type

/**
 * Filtra los platos según si son veganos o no.
 * @param plates Array de platos.
 * @param isVegan Indica si se deben filtrar los platos veganos (true) o no veganos (false).
 * @returns Array de platos filtrados.
 */
export const filterPlatesByVegan = (plates: Plate[], isVegan: boolean): Plate[] => {
  return plates.filter(plate => isPlatoVegano(plate, isVegan));
}

/**
 Filtra los platos según los nombres especificados y devuelve un array de objetos Plato.
 @param plates El array de platos a filtrar.
 @param names El array de nombres de platos utilizados para filtrar.
 @returns Un array de objetos Plato filtrados por los nombres especificados.
 */
export const filterPlatesByCategories = (plates: Plate[], names: string[]) => {
  if (names.length === 0) {
    return plates;
  }

  return plates.filter(menu => names.includes(menu.categoria));

}


/**
 @Deprecated
 * Filtra los platos según si son sin TACC o no.
 * @param plates Array de platos.
 * @param isSinTACC Indica si se deben filtrar los platos sin TACC (true) o con TACC (false).
 * @returns Array de platos filtrados.
 */
export const filterPlatesBySinTACC = (plates: Plate[], isSinTACC: boolean): Plate[] =>
  plates.filter(plate => isPlatoSinTACC(plate, isSinTACC));


/**
 * Filtra los platos según un término de búsqueda.
 * @param plates Array de platos.
 * @param termSearch Término de búsqueda.
 * @returns Array de platos filtrados.
 */
export const filterPlatesByTerm = (plates: Plate[], termSearch: string): Plate[] =>
  plates.filter(plate => hasPlatoSimilarTerm(plate, termSearch));


/**
 * Verifica si un plato tiene un término similar en alguno de sus atributos.
 * @param plato Plato a verificar.
 * @param searchTerm Término de búsqueda.
 * @returns `true` si el plato tiene un término similar en alguno de sus atributos, de lo contrario `false`.
 */
const hasPlatoSimilarTerm = (plato: Plate, searchTerm: string) => {
  let conditions = [
    hasPlatoSimilarName,
    hasPlatoSimilarType,
    hasPlatoSimilarDescription,
    hasPlatoSimilarSurname
  ];

  return conditions.some(condition => condition(plato, searchTerm));
}

/**
 * Verifica si un plato es sin TACC.
 * @param plato Plato a verificar.
 * @param isNoTacc Indica si se debe verificar si el plato es sin TACC (true) o no (false).
 * @returns `true` si el plato es sin TACC, de lo contrario `false`.
 */
const isPlatoSinTACC = (plato: Plate, isNoTacc: boolean) => plato.sinTACC === isNoTacc;

/**
 * Verifica si un plato es vegano.
 * @param plato Plato a verificar.
 * @param isVegan Indica si se debe verificar si el plato es vegano (true) o no (false).
 * @returns `true` si el plato es vegano, de lo contrario `false`.
 */
const isPlatoVegano = (plato: Plate, isVegan: boolean): boolean =>
  plato.vegano === isVegan;

/**
 * Verifica si el nombre de un plato tiene un término similar.
 * @param plato Plato a verificar.
 * @param searchTerm Término de búsqueda.
 * @returns `true` si el nombre del plato tiene un término similar, de lo contrario `false`.
 */
const hasPlatoSimilarName = (plato: Plate, searchTerm: string) =>
  plato.nombre.toLowerCase().includes(searchTerm.toLowerCase());

/**
 * Verifica si el apellido de un plato tiene un término similar.
 * @param plato Plato a verificar.
 * @param searchTerm Término de búsqueda.
 * @returns `true` si el apellido del plato tiene un término similar, de lo contrario `false`.
 */
const hasPlatoSimilarSurname = (plato: Plate, searchTerm: string) =>
  plato.categoria?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;

/**
 * Verifica si el tipo de un plato tiene un término similar.
 * @param plato Plato a verificar.
 * @param searchTerm Término de búsqueda.
 * @returns `true` si el tipo del plato tiene un término similar, de lo contrario `false`.
 */
const hasPlatoSimilarType = (plato: Plate, searchTerm: string) =>
  plato.tipoPlato.toLowerCase().includes(searchTerm.toLowerCase())

/**
 * Verifica si la descripción de un plato tiene un término similar.
 * @param plato Plato a verificar.
 * @param searchTerm Término de búsqueda.
 * @returns `true` si la descripción del plato tiene un término similar, de lo contrario `false`.
 */
const hasPlatoSimilarDescription = (plato: Plate, searchTerm: string) =>
  plato.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
