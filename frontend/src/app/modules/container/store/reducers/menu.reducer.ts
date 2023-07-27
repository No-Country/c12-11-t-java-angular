import {createReducer, on} from "@ngrx/store";
import {PlateActions} from "@modules/container/store/actions/plates.actions";
import {MenuActions} from "@modules/container/store/actions/menu.actions";
import {FilterActions} from "@modules/container/store/actions/filters.actions";
import {handleLoadMenu, handleSetMenu} from "@modules/container/store/reducers/handlers/menu.handler";
import {
  handleLoadPlatesFailure,
  handleLoadPlatesSuccess,
  handleSetPlateSelected
} from "@modules/container/store/reducers/handlers/plate.handler";
import {
  handleFilterByCategory,
  handleFilterBySearchTerm,
  handleFilterByType,
  handleFilterSinTacc,
  handleFilterVegano,
  handleRemoveFilters
} from "@modules/container/store/reducers/handlers/filter.handler";
import {MenuState} from "@modules/container/store/models/menu-state.model";

export const initialState: MenuState = {
  menu: '',
  plateSelected: undefined,
  plates: [
    {
      platoId: 1,
      categoria: 'Hamburguesa',
      nombre: 'Hamburguesa 1',
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
      platoId: 2,
      categoria: 'Hamburguesa',
      nombre: 'Hamburguesa 2',
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
      platoId: 3,
      categoria: 'Hamburguesa',
      nombre: 'Hamburguesa Vegana y sin tacc',
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
      platoId: 4,
      categoria: 'Panini',
      nombre: 'Panini 1',
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
      platoId: 5,
      categoria: 'Panini',
      nombre: 'Panini 2',
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
      platoId: 6,
      categoria: 'Panini',
      nombre: 'Panini 3',
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
      platoId: 7,
      categoria: 'Panini',
      nombre: 'Panini 4',
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
      platoId: 8,
      categoria: 'Panini',
      nombre: 'Panini 5',
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
      platoId: 9,
      categoria: 'Panini',
      nombre: 'Panini 6',
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
      platoId: 10,
      categoria: 'Panini',
      nombre: 'Panini 7',
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
      platoId: 11,
      categoria: 'Panini',
      nombre: 'Panini 8',
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
      platoId: 12,
      categoria: 'Panini',
      nombre: 'Panini 9',
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
      platoId: 13,
      categoria: 'Cafe',
      nombre: 'Expreso',
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
      platoId: 14,
      categoria: 'Cafe',
      nombre: 'Americano',
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
      platoId: 15,
      categoria: 'Cafe',
      nombre: 'Submarino',
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
      platoId: 16,
      categoria: 'Te',
      nombre: 'Te Verde',
      precio: 4000,
      descripcion: 'To the tasty celery add raspberries, ginger, soy sauce and roasted turkey.',
      vegano: false,
      sinTACC: false,
      calificacion: 1,
      urlImagen: '/assets/img/plates/gourmet.jpg',
      stock: 0,
      tipoPlato: 'Desayuno',
    }
  ],
  activateFilters: false,
  activateFilterSearchTerm: '',
  activateFilterSinTacc: false,
  activateFilterVegano: false,
  activateFilterByType: '',
  activateFilterByCategory: '',
  loading: false,
  error: null
};


export const menuReducer = createReducer(
  initialState,
  on(PlateActions.load, handleLoadMenu),
  on(PlateActions.loadSuccess, handleLoadPlatesSuccess),
  on(PlateActions.loadFailure, handleLoadPlatesFailure),

  on(MenuActions.setMenu, handleSetMenu),


  on(FilterActions.removeAll, handleRemoveFilters),
  on(FilterActions.toggleSinTacc, handleFilterSinTacc),
  on(FilterActions.toggleVegano, handleFilterVegano),
  on(FilterActions.updateByCategory, handleFilterByCategory),
  on(FilterActions.updateByType, handleFilterByType),
  on(FilterActions.updateBySearch, handleFilterBySearchTerm),
  on(PlateActions.setSelected, handleSetPlateSelected),
)



