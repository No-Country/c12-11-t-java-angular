export interface Plate {
  platoId?: number
  nombre: string
  precio: number
  descripcion: string
  vegano: boolean
  sinTACC: boolean
  calificacion: number
  urlImagen: string
  stock: number
  tipoPlato: string
  subTipoPlato?:string
}
