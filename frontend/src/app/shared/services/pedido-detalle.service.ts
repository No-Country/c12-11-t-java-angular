import {inject, Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private apiBase = inject(ApiBaseService);

  listarPedidoDetalle(): Observable<PedidoDetalleRequest[]> {
    return this.apiBase.get<PedidoDetalleRequest[]>('/listaDePedidos');
  }

  crearPedidoDetalle(body: PedidoDetalleRequest): Observable<PedidoDetalleRequest> {
    return this.apiBase.post<PedidoDetalleRequest>('/crearPedido', body);
  }

  /*
    actualizarPlatoo(body: PlatoRequest): Observable<Plate> {
      return this.apiBase.put<Plate>('/plato', body);
    }

    eliminarPlato(idPlato: number): Observable<any> {
      return this.apiBase.delete(`/plato/${idPlato}`)
    }
    */
}

export interface PedidoDetalleRequest {
  pedidoDetalleId: number;
  pedidoId: number;
  platoId: number;
  cantidad: number;
  subTotal: number;
}
