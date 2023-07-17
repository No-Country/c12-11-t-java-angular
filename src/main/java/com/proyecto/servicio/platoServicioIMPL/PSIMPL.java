package com.proyecto.servicio.platoServicioIMPL;

import com.proyecto.entidades.Plato;
import com.proyecto.repositorio.PlatoRepositorio;
import com.proyecto.servicio.PlatoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PSIMPL implements PlatoServicio {

    @Autowired
    private PlatoRepositorio platoRepositorio;

    @Override
    public List<Plato> listaDePlatos() {
        return (List<Plato>) this.platoRepositorio.findAll();
    }

    @Override
    public Plato crearPlato(Plato plato) {

        plato.setNombre(plato.getNombre());

        return this.platoRepositorio.save(plato);
    }

    @Override
    public Plato modificarPlato(Plato plato) {
        return this.platoRepositorio.save(plato);
    }

    @Override
    public Plato buscarPlato(int id) {
        return this.platoRepositorio.findById(id).get();
    }

    @Override
    public void eliminarPlato(int id) {

        this.platoRepositorio.deleteById(id);
    }

	@Override
	public List<Plato> buscarPlatoVegano() {
		
		List<Plato> lista= new ArrayList<Plato>();
		List<Plato> listaAux= new ArrayList<Plato>();
		
		listaAux=(List<Plato>) platoRepositorio.findAll();

			for (Plato plato : listaAux) {
				if(plato.isVegano()) {
					lista.add(plato);
				}
			}
	return lista;	
	}
	@Override
	public List<Plato> buscarPostres() {
		
		List<Plato> lista= new ArrayList<Plato>();
		List<Plato> listaAux= new ArrayList<Plato>();
		
		listaAux=(List<Plato>) platoRepositorio.findAll();

			for (Plato plato : listaAux) {
				if(plato.getTipoPlato().matches("Postre")) {
					lista.add(plato);
				}
			}
	return lista;	
	}
	
	@Override
	public List<Plato> buscarPrincipales() {
		
		List<Plato> lista= new ArrayList<Plato>();
		List<Plato> listaAux= new ArrayList<Plato>();
		
		listaAux=(List<Plato>) platoRepositorio.findAll();

			for (Plato plato : listaAux) {
				if(plato.getTipoPlato().matches("Principal")) {
					lista.add(plato);
				}
			}
	return lista;	
	}
	
	@Override
	public List<Plato> buscarBebidas() {
		
		List<Plato> lista= new ArrayList<Plato>();
		List<Plato> listaAux= new ArrayList<Plato>();
		
		listaAux=(List<Plato>) platoRepositorio.findAll();

			for (Plato plato : listaAux) {
				if(plato.getTipoPlato().matches("Bebida")) {
					lista.add(plato);
				}
			}
	return lista;	
	}
	@Override
	public List<Plato> buscarAcompañamientos() {
		
		List<Plato> lista= new ArrayList<Plato>();
		List<Plato> listaAux= new ArrayList<Plato>();
		
		listaAux=(List<Plato>) platoRepositorio.findAll();
		
		for (Plato plato : listaAux) {
			if(plato.getTipoPlato().matches("Acompañamiento")) {
				lista.add(plato);
			}
		}
		return lista;	
	}


    
}
