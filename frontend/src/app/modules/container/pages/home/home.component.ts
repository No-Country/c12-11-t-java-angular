import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Plate } from '@shared/interfaces/plate.interface';
import { SliderItem } from '@shared/interfaces/slider-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeSearch = new FormControl('');

  faMagnifyingGlass = faMagnifyingGlass;

  plateList:Plate[] = [];

  slides: SliderItem[] = [];

  ngOnInit() {
    this.getPlateList();
    this.getHomeSlides();
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
  }

  getHomeSlides() {
    this.slides = [
      {
        title: "First slide label",
        description: "Some representative placeholder content for the slide.",
        imageUrl: "https://picsum.photos/id/944/900/500"
      },
      {
        title: "Second slide label",
        description: "Some representative placeholder content for the slide.",
        imageUrl: "https://picsum.photos/id/1011/900/500"
      },
      {
        title: "Third slide label",
        description: "Some representative placeholder content for the slide.",
        imageUrl: "https://picsum.photos/id/984/900/500"
      }
    ];
  }

}
