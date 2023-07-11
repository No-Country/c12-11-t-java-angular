import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Plato} from "@shared/interfaces/plato.interface";
import {MenuPlate} from "@shared/interfaces/menu-plate.interface";
import {PlatoFilterService} from "@shared/services/filter-plato-service/plato-filter.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = ''; // URL
  private plates: Plato[] = [
    {
      platoId: 1,
      nombre: 'Hamburguesa',
      subTipoPlato: 'Hamburguesa Tipo 1',
      precio: 2000,
      descripcion: 'Minced oysters can be made melted by whisking with gold tequila.',
      vegano: true,
      sinTACC: false,
      calificacion: 1,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 11,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 1,
      nombre: 'Hamburguesa',
      subTipoPlato: 'Hamburguesa Tipo 2',
      precio: 2000,
      descripcion: 'To the small oysters add watermelon, chickpeas, champaign and bitter rice.',
      vegano: false,
      sinTACC: true,
      calificacion: 2,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 1,
      nombre: 'Hamburguesa',
      subTipoPlato: 'Hamburguesa Vegana y sin tacc',
      precio: 2000,
      descripcion: 'Per guest prepare twelve peaces of worcestershire sauce with shreded butter for dessert.',
      vegano: true,
      sinTACC: true,
      calificacion: 3,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 0,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      subTipoPlato: 'Panini 1',
      precio: 2000,
      descripcion: 'Per guest prepare one package of kefir with sliced chicory for dessert.',
      vegano: true,
      sinTACC: false,
      calificacion: 4,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 0,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 2,
      nombre: 'Panini',
      subTipoPlato: 'Panini 2',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: false,
      sinTACC: false,
      calificacion: 5,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 3,
      nombre: 'Panini',
      subTipoPlato: 'Panini 3',
      precio: 2000,
      descripcion: 'To the springy chicken add white bread, chicken breasts, joghurt and cold raspberries.',
      vegano: false,
      sinTACC: false,
      calificacion: 6,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 4,
      nombre: 'Panini',
      subTipoPlato: 'Panini 4',
      precio: 2000,
      descripcion: 'Toss each side of the cracker crumps with six and a half teaspoons of garlic.',
      vegano: false,
      sinTACC: true,
      calificacion: 7,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 5,
      nombre: 'Panini',
      subTipoPlato: 'Panini 5',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 8,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 6,
      nombre: 'Panini',
      subTipoPlato: 'Panini 6',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 9,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 7,
      nombre: 'Panini',
      subTipoPlato: 'Panini 7',
      precio: 2000,
      descripcion: 'Everyone just loves the pepperiness of tuna salad soakd with basil.',
      vegano: true,
      sinTACC: false,
      calificacion: 10,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 5,
      tipoPlato: 'Almuerzo y Cena',
    },
    {
      platoId: 8,
      nombre: 'Panini',
      subTipoPlato: 'Panini 8',
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
      platoId: 9,
      nombre: 'Panini',
      subTipoPlato: 'Panini 9',
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
      subTipoPlato: 'Expreso',
      precio: 4000,
      descripcion: 'To the melted white bread add pork shoulder, raspberries, beer and fluffy onion.',
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
      subTipoPlato: 'Americano',
      precio: 4000,
      descripcion: 'Per guest prepare nine oz of lemon juice with boilled blueberries for dessert. .',
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
      subTipoPlato: 'Submarino',
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
      subTipoPlato: 'Te Verde',
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

  constructor(private http: HttpClient, private platoFilterService: PlatoFilterService) {
  }

  private _tipoPlato = 'Almuerzo y Cena'

  get tipoPlato(): string {
    return this._tipoPlato;
  }

  set tipoPlato(value: string) {
    this._tipoPlato = value;
  }

  /**
   * Obtiene todos los tipos de plato disponibles.
   * @returns Un array de strings con los tipos de plato únicos.
   * Nota: Si no se especifica un tipo de plato válido, se devuelven todos los tipos de plato existentes.
   */
  getAllTipoPlato() {
    return [...new Set(this.plates.map(menu => menu.tipoPlato))];
  }


  /**
   * Obtiene los nombres únicos de los platos según el tipo de plato actual.
   * @returns Un array de strings con los nombres únicos de los platos filtrados por el tipo de plato actual.
   */
  getPlateNamesByTipoPlato() {
    const platosFiltrados = this.platoFilterService.filterPlatesByPlateType(this.plates, this._tipoPlato);
    return [...new Set(platosFiltrados.map(menu => menu.nombre))];
  }


  /**
   * Crea un menú en base al tipo de plato ingresado y devuelve un array de objetos MenuPlate.
   * @param tipoPlato El tipo de plato para filtrar los platos del menú.
   * @returns Un array de objetos MenuPlate generado en base a los platos con el mismo nombre.
   */
  createMenu(tipoPlato: string = ''): MenuPlate[] {
    return this.getPlateNamesByTipoPlato().map(name => this.createMenuPlate(name));
  }

  /**
   * Crea un objeto MenuPlate en base al nombre del plato y los platos correspondientes.
   * @param name El nombre del plato para el menú.
   * @returns Un objeto MenuPlate con el nombre del plato y los platos correspondientes.
   */
  createMenuPlate(name: string): MenuPlate {
    return {
      name: name,
      plates: this.platoFilterService.filterPlatesByName(this.plates, name)
    };
  }


}
