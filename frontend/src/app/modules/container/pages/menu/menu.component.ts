import {Component} from '@angular/core';
import {faChevronLeft, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Location} from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faChevronLeft = faChevronLeft
  faCart = faCartShopping
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
          description: 'Steak tastes best with ginger sauce and lots of chocolate. Try warming shrimps curry flavored with BBQ sauce',
          price: 200
        },
          {
            id: 1,
            title: 'Hamburguesa 2',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description: 'For a minced thin porridge, add some cocktail sauce and dill.',
            price: 200
          },
          {
            id: 1,
            title: 'Hamburguesa 3',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description: 'To the sour chocolate add ginger, ramen, lime and ground lentils.',
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
          description: 'Instead of rinsing diced lime with cauliflower, use twenty and a half teaspoons iced tea and one container woodruff grinder.',
          price: 900
        },
          {
            id: 1,
            title: 'Wraps 2',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description: 'Chop two oysters, avocado, and rum in a large plastic bag over medium heat, grill for seven minutes and mix with some doughnut.',
            price: 2000
          },
          {
            id: 1,
            title: 'Wraps 3',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description: 'Whisk eight pounds of peanuts in a dozen peaces of gold tequila. Marshmellow combines greatly with warm chicken',
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
          description: 'Everyone loves the aroma of raspberries punch mash upd with delicious butterscotch.',
          price: 200
        },
          {
            id: 1,
            title: 'Panini 2',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description: 'For a tender soaked ricotta, add some iced tea and szechuan pepper.',
            price: 200
          },
          {
            id: 1,
            title: 'Panini 3',
            imageUrl: 'https://placehold.co/600x400?text=Imagen',
            description: 'Instead of soaking dried crême fraîche with blueberries, use four and a half teaspoons red wine and twenty peaces basil wok.',
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

  constructor(private location: Location) { }


}
