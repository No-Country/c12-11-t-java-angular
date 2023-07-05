import {Component} from '@angular/core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faChevronLeft = faChevronLeft
  //Data de api
  data = {
    menu: [
      {
        title: "Hamburguesa",
        food: [{
          id: 1,
          title: 'Hamburguesa 1',
          stars: 3,
          imageUrl: 'https://placehold.co/600x400?text=Imagen',
          timeMin: 20,
          timeMax: 30,
          price: 200
        },
          {
            id: 1,
            title: 'Hamburguesa 2',
            stars: 1,
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            timeMin: 20,
            timeMax: 30,
            price: 200
          },
          {
            id: 1,
            title: 'Hamburguesa 3',
            stars: 4,
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            timeMin: 20,
            timeMax: 30,
            price: 200
          }
        ]
      },
      {
        title: "Wraps",
        food: [{
          id: 1,
          title: 'Wraps 1',
          stars: 3,
          imageUrl: 'https://placehold.co/600x400?text=Imagen',
          timeMin: 20,
          timeMax: 30,
          price: 900
        },
          {
            id: 1,
            title: 'Wraps 2',
            stars: 1,
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            timeMin: 20,
            timeMax: 30,
            price: 2000
          },
          {
            id: 1,
            title: 'Wraps 3',
            stars: 4,
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            timeMin: 20,
            timeMax: 30,
            price: 2200
          }
        ]

      },
      {
        title: "Panini",
        food: [{
          id: 1,
          title: 'Panini 1',
          stars: 3,
          imageUrl: 'https://placehold.co/600x400?text=Imagen',
          timeMin: 20,
          timeMax: 30,
          price: 200
        },
          {
            id: 1,
            title: 'Panini 2',
            stars: 1,
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            timeMin: 20,
            timeMax: 30,
            price: 200
          },
          {
            id: 1,
            title: 'Panini 3',
            stars: 4,
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            timeMin: 20,
            timeMax: 30,
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
