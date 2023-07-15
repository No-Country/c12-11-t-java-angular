import {MenuState} from "@modules/container/store/state/menu.state";

export function handleLoadMenu(state: MenuState): MenuState {
  return {
    ...state,
    loading: true,
    error: null
  };
}

export function handleSetMenu(state: MenuState, {menuName}: { menuName: string }): MenuState {
  return {
    ...state,
    menu: menuName
  };
}


