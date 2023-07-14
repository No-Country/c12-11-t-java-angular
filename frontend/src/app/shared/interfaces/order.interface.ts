import {Plate} from "@shared/interfaces/plate.interface";

export interface Order {
  id?: number;
  plate: Plate;
  count: number;
  totalParcial: number;
}
