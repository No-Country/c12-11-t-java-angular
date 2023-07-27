import {inject, Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {Observable} from 'rxjs';
import { BASE_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlateService {
  private _urlBase: string = BASE_URL;
  private http= inject(HttpClient);
  private apiBase = inject(ApiBaseService);

  listarPedidos(): Observable<PedidoRequest[]> {
    return this.apiBase.get<PedidoRequest[]>('/listaDePedidos');
  }

  crearPedido(body: PedidoRequest): Observable<PedidoRequest> {
    return this.http.post<PedidoRequest>(`${this._urlBase}/crearPedido`, body);
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

export interface PedidoRequest {
  pedidoId: number;
  usuarioId: number;
  direccionId: number;
  pagoId: number;
  fechaPedido: Date;
  fechaEntrega: Date;
  fechaEntregaEstimada: Date;
  estadoPedidoId: number;
}
