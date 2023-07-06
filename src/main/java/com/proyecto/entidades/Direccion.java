package com.proyecto.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "direccion")
public class Direccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "direccionId")
    private int direccionId;
    @Column(name = "zona")
    private String zona;
    @Column(name = "nombreCalle")
    private String nombreCalle;
    @Column(name = "altura")
    private int altura;
    @Column(name = "tipoVivienda")
    private String tipoVivienda;
}
