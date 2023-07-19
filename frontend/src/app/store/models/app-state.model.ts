import {Cart} from "./cart.model";
import {User} from "@shared/interfaces/user.interface";

export interface AppState {
  cart: Cart
  user: User
  loading: boolean;
  error: string | null;
}
