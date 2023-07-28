import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCustomer, selectHistorial, selectUser} from "../../../store/selectors/user.selectors";
import {UserActions} from "../../../store/actions/user.actions";
import {User} from "@shared/interfaces/user.interface";
import {Customer} from "@shared/services/customer.service";
import {HistorialRequest} from "@shared/services/pedido.service";

@Injectable({
  providedIn: 'root'
})

export class UserFacade {

  constructor(private store: Store) {
    const userID = 1

    this.store.dispatch(UserActions.loadUser({id: userID}))
    /*this.store.dispatch(UserActions.loadCustomer({id: 3}))
    this.store.dispatch(UserActions.loadOrder())
    this.store.dispatch(CartActions.loadCart())*/


  }

  public getUser(): Observable<User> {
    return this.store.pipe(select(selectUser))
  }

  public getCustomer(): Observable<Customer> {
    return this.store.pipe(select(selectCustomer))
  }

  public getHistorial(): Observable<HistorialRequest[]> {
    return this.store.pipe(select(selectHistorial))
  }


}
