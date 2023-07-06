import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Plate } from '@shared/interfaces/plate.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeSearch = new FormControl('');

  faMagnifyingGlass = faMagnifyingGlass;

  plateList:Plate[] = [];

  ngOnInit() {
    this.getPlateList();
  }

  getPlateList() {
    this.plateList = [
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      },
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      },
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      },
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      },
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      },
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      },
      {
        name: "Nombre del plato",
        description: "Descripción rápida del plato y sus ingredientes.",
        imageUrl: "assets/img/plates/gourmet.jpg"
      }
    ]

    return this.plateList;
  }

}
