import { Injectable, inject } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { Observable } from 'rxjs';
import { Address } from '@shared/interfaces/address.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiBase = inject(ApiBaseService);
  listarDirecciones(): Observable<Address[]> {
    return this.apiBase.get<Address[]>('/listaDeDirecciones');
  }
 /*  crearDirreccion(body:Address): Observable<Address> {
    console.log(body);

    return this.apiBase.post<Address>('/crearDireccion',{...body});
  } */
}
