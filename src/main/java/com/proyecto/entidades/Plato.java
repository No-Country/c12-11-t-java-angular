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
@Table(name="plato")
public class Plato {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "platoId")
	private int platoId;
	@Column(name = "nombre")
	private String nombre;
	@Column(name= "apellido")
	private String apellido;
	@Column(name= "precio")
	private float precio;
	@Column(name= "descripcion")
	private String descripcion;
	@Column(name= "vegano")
	private boolean vegano;
	@Column(name= "sintacc")
	private boolean sinTACC;
	@Column(name= "calificacion")
	private int calificacion;
	@Column(name= "urlImagen")
	private String urlImagen;
	@Column(name= "stock")
	private int stock;
	@Column(name= "tipoPlato")
	private String tipoPlato;

	 
	
}
