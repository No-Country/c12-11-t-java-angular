import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plato} from "@shared/interfaces/plato.interface";
import {MenuPlate} from "@shared/interfaces/menu-plate.interface";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = ''; // URL
  private _tipoPlato = 'Almuerzo y Cena'
  private datos: Plato[] = [
    {
      platoId: 1,
      nombre: 'Hamburguesa',
      apellido: 'Hamburguesa Tipo 1',
      precio: 2000,
      descripcion: 'Minced oysters can be made melted by whisking with gold tequila.',
      vegano: true,
      sinTACC: true,
      calificacion: 10,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 10,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 1,
      nombre: 'Hamburguesa',
      apellido: 'Hamburguesa Tipo 2',
      precio: 2000,
      descripcion: 'To the small oysters add watermelon, chickpeas, champaign and bitter rice.',
      vegano: true,
      sinTACC: true,
      calificacion: 10,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 10,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 1,
      nombre: 'Hamburguesa',
      apellido: 'Hamburguesa Tipo 3',
      precio: 2000,
      descripcion: 'Per guest prepare twelve peaces of worcestershire sauce with shreded butter for dessert.',
      vegano: true,
      sinTACC: true,
      calificacion: 10,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 10,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 1',
      precio: 2000,
      descripcion: 'Per guest prepare one package of kefir with sliced chicory for dessert.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 2',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 3',
      precio: 2000,
      descripcion: 'To the springy chicken add white bread, chicken breasts, joghurt and cold raspberries.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 4',
      precio: 2000,
      descripcion: 'Toss each side of the cracker crumps with six and a half teaspoons of garlic.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 5',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 6',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 7',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 8',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      apellido: 'Panini 9',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 3,
      nombre: 'Cafe',
      apellido: 'Expreso',
      precio: 4000,
      descripcion: 'To the bitter spinach add eggs, chicken, gold tequila and tender ramen.',
      vegano: false,
      sinTACC: true,
      calificacion: 2,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 2,
      tipoPlato: 'Desayuno',
    },
    {
      platoId: 3,
      nombre: 'Cafe',
      apellido: 'Americano',
      precio: 4000,
      descripcion: 'To the bitter spinach add eggs, chicken, gold tequila and tender ramen.',
      vegano: false,
      sinTACC: false,
      calificacion: 2,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 2,
      tipoPlato: 'Desayuno',
    },
    {
      platoId: 4,
      nombre: 'Cafe',
      apellido: 'Submarino',
      precio: 4000,
      descripcion: 'To the tasty celery add raspberries, ginger, soy sauce and roasted turkey.',
      vegano: false,
      sinTACC: false,
      calificacion: 1,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 0,
      tipoPlato: 'Desayuno',
    },
    {
      platoId: 4,
      nombre: 'Te',
      apellido: 'Te Verde',
      precio: 4000,
      descripcion: 'To the tasty celery add raspberries, ginger, soy sauce and roasted turkey.',
      vegano: false,
      sinTACC: false,
      calificacion: 1,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 0,
      tipoPlato: 'Desayuno',
    }
  ]; // Ejemplo de data api

  constructor(private http: HttpClient) {
  }

  get tipoPlato(): string {
    return this._tipoPlato;
  }

  set tipoPlato(value: string) {
    this._tipoPlato = value;
  }

  //Obtener Todas
  getAllPlato() {
    //return this.http.get<any[]>(`${this.apiUrl}/datos`);
    return <Plato[]>this.datos
  }

  /**
   * Obtiene todos los tipos de plato disponibles.
   * @returns Un array de strings con los tipos de plato únicos.
   * Nota: Si no se ingresa un tipo válido, se devuelven todos los tipos de plato.
   */
  getAllTipoPlato() {
    return [...new Set(this.datos.map(menu => menu.tipoPlato))];
  }


  /**
   * Obtiene los nombres únicos de los platos según el tipo de plato ingresado.
   * @returns Un array de strings con los nombres únicos de los platos.
   */
  getPlatoNamesByTipoPlato() {
    const platosFiltrados = this.filterPlatosByTipoPlato(this._tipoPlato);
    return [...new Set(platosFiltrados.map(menu => menu.nombre))];
  }


  /**
   * Filtra los platos según el tipo de plato ingresado y devuelve un array de objetos Plato.
   * @param tipoPlato El tipo de plato para filtrar los platos.
   * @returns Un array de objetos Plato filtrados por tipo de plato.
   * Nota: Si el tipo de plato no es válido, se devuelven todos los platos.
   */
  filterPlatosByTipoPlato(tipoPlato: string) {
    if (tipoPlato && this.isValidTipoPlato(tipoPlato)) {

      return this.datos.filter(menu => menu.tipoPlato === tipoPlato);
    }
    return this.datos;
  }

  /**
   * Verifica si un tipo de plato es válido.
   * @param tipoPlato El tipo de plato a verificar.
   * @returns Un valor booleano que indica si el tipo de plato es válido.
   */
  isValidTipoPlato(tipoPlato: string) {
    // Obtener todos los tipos de plato
    const tiposPlato = this.getAllTipoPlato();

    // Verificar si el tipo de plato está incluido en la lista de tipos de plato
    return tiposPlato.includes(tipoPlato);
  }

  /**
   * Crea un menú en base al tipo de plato ingresado y devuelve un array de objetos MenuPlate.
   * @returns Un array de objetos MenuPlate generado en base a los platos con el mismo nombre.
   */
  createMenu(tipoPlato: string = '') {
    let arrMenu = <MenuPlate[]>[];

    this.getPlatoNamesByTipoPlato().forEach(nombre => {
      // Crear un objeto MenuPlate con el nombre del plato y los platos correspondientes
      arrMenu.push({name: nombre, plates: this.filterPlatosByNombre(nombre)});
    });

    return arrMenu;
  }

  /**
   * Filtra los platos según el nombre del plato ingresado y devuelve un array de objetos Plato.
   * @param nombre El nombre del plato para filtrar los platos.
   * @returns Un array de objetos Plato filtrados por nombre del plato.
   * Nota: -
   */
  filterPlatosByNombre(nombre: string) {
    return this.datos.filter(menu => menu.nombre === nombre);
  }


}
