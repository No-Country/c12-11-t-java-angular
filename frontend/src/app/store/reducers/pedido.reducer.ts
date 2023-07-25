import { createReducer, on } from "@ngrx/store";
import { AddIdAddress } from "../actions/pedido.actions";
import { Pedido } from "../models/pedido.model";

export const estadoInicial:Pedido={};
export const pedidoReducer = createReducer(
  estadoInicial,
  on(AddIdAddress,(state,{direccionId})  =>{
    return {...state,direccionId}
  }

  ))
