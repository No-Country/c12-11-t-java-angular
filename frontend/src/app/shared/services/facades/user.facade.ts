import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Order} from "../../../store/models/order.model";
import {Observable} from "rxjs";
import {selectCustomer, selectOrders, selectUser} from "../../../store/selectors/user.selectors";
import {UserActions} from "../../../store/actions/user.actions";
import {User} from "@shared/interfaces/user.interface";
import {Customer} from "@shared/services/customer.service";

@Injectable({
  providedIn: 'root'
})

export class UserFacade {

  constructor(private store: Store) {

    this.store.dispatch(UserActions.loadUser({id: 1}))

  }

  public getUser(): Observable<User> {
    return this.store.pipe(select(selectUser))
  }

  public getCustomer(): Observable<Customer> {
    return this.store.pipe(select(selectCustomer))
  }

  public getOrders(): Observable<Order[]> {
    this.store.dispatch(UserActions.loadOrder())
    return this.store.pipe(select(selectOrders))
  }


}
