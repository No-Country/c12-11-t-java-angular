import {User} from "@shared/interfaces/user.interface";

export interface AppState {
  user: User
  loading: boolean;
  error: string | null;
}
