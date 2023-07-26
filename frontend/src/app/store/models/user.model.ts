import {User} from "@shared/interfaces/user.interface";
import {Order} from "./order.model";
import {Customer} from "@shared/services/customer.service";

export interface UserState {
  user: User,
  customer:Customer
  orders:Order[]
  loading: boolean;
  error: string | null;
}

