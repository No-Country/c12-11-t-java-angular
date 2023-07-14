import {Component, OnInit} from '@angular/core';
import {Plate} from "@shared/interfaces/plate.interface";
import {MenuState} from "@modules/container/store/state/menu.state";
import {select, Store} from "@ngrx/store";
import {selectPlateSelected} from "@modules/container/store/selectors/menu.selectors";

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.scss']
})
export class DescripcionProductoComponent implements OnInit {
  plate: Plate | null = null
  showPlate: boolean = false

  constructor(private menuStore: Store<MenuState>) {
    this.menuStore.pipe(select(selectPlateSelected)).subscribe(plate => {
      this.plate = plate
      this.showPlate = plate != null
      console.log(this.plate)
    });
  }

  ngOnInit(): void {

  }

}
