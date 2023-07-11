import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Plate } from '@shared/interfaces/plate.interface';
import { SliderItem } from '@shared/interfaces/slider-item.interface';
import { PlateService } from '@shared/services/plate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private plateService = inject(PlateService);

  homeSearch = new FormControl('');

  faMagnifyingGlass = faMagnifyingGlass;

  plateList:Plate[] = [];

  slides: SliderItem[] = [];

  ngOnInit() {
    this.getPlateList();
    this.getHomeSlides();
  }

  getPlateList() {

    this.plateService.listarPlatos()
      .subscribe({
        next: (rpta) => {
          this.plateList = rpta
          console.log("rpta =>", rpta)
        },
        error: (message) => {
          console.log("error =>", message);
        }
      })


    /*
    this.plateList = [
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción rápida del plato y sus ingredientes.",
        urlImagen: "assets/img/plates/gourmet.jpg"
      }
    ]
    */
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
