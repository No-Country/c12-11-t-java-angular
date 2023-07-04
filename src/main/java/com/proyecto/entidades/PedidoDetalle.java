package com.proyecto.entidades;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="pedidoDetalle")
public class PedidoDetalle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pedidoDetalleId")
	private String pedidoDetalleId;
	@Column(name = "pedidoId")
	private int pedidoId;
	@Column(name = "platoId")
	private int platoId;
	@Column(name = "cantidad")
	private int cantidad;
	@Column(name = "subTotal")
	private float subTotal;
	
	
}
