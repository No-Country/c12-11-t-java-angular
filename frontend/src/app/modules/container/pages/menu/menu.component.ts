import {Component} from '@angular/core';
import {faChevronLeft,faCartShopping} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faChevronLeft = faChevronLeft
  faCart=faCartShopping
  //Data de api
  data = {
    typeMenu: "Almuerzo y cena",
    menu: [
      {
        title: "Patys",
        products: [{
          id: 1,
          title: 'Hamburguesa 1',
          imageUrl: 'https://placehold.co/600x400?text=Imagen',
          description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
          price: 200
        },
          {
            id: 1,
            title: 'Hamburguesa 2',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
            price: 200
          },
          {
            id: 1,
            title: 'Hamburguesa 3',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
            price: 200
          }
        ]
      },
      {
        title: "Wraps",
        products: [{
          id: 1,
          title: 'Wraps 1',
          imageUrl: 'https://placehold.co/600x400?text=Imagen',
          description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
          price: 900
        },
          {
            id: 1,
            title: 'Wraps 2',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
            price: 2000
          },
          {
            id: 1,
            title: 'Wraps 3',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
            price: 2200
          }
        ]

      },
      {
        title: "Panini",
        products: [{
          id: 1,
          title: 'Panini 1',
          imageUrl: 'https://placehold.co/600x400?text=Imagen',
          description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
          price: 200
        },
          {
            id: 1,
            title: 'Panini 2',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
            price: 200
          },
          {
            id: 1,
            title: 'Panini 3',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description:'Texto de maximo de 2 renglones para el detalle del plato donde se puede visualizar sus ingredientes...........',
            price: 200
          }
        ]

      }
    ]
  }
  //Filtros de api?
  filters = [
    {
      id: 1,
      name: "filter 1"
    }, {
      id: 2,
      name: "filter 2"
    }, {
      id: 3,
      name: "filter 3"
    }, {
      id: 4,
      name: "filter 4"
    },
    {
      id: 1,
      name: "filter 1"
    }, {
      id: 2,
      name: "filter 2"
    }, {
      id: 3,
      name: "filter 3"
    }, {
      id: 4,
      name: "filter 4"
    }]
  //Tiene algo en el carrito? -> NgRX -> Getter a Store + Mutations(Reducer) | Consultar Store
  isButtonSuccessDisabled = false


}
