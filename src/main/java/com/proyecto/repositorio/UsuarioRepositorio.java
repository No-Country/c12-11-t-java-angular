package com.proyecto.repositorio;

import com.proyecto.entidades.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepositorio extends CrudRepository<Usuario,Integer> {
}
