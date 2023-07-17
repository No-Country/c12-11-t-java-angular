package com.proyecto.controladores;

import com.proyecto.entidades.Plato;
import com.proyecto.servicio.platoServicioIMPL.PSIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("VeggieDelivery")
public class ControladorPlato {

    @Autowired
    private PSIMPL psimpl;

    @GetMapping
    @RequestMapping(value = "listaDePlatos", method = RequestMethod.GET)
    public ResponseEntity<?> listDePlatos() {

        List<Plato> ListaDePlatosx = this.psimpl.listaDePlatos();

        return ResponseEntity.ok(ListaDePlatosx);

    }
    
    @GetMapping
    @RequestMapping(value = "listaDePlatosVeganos", method = RequestMethod.GET)
    public ResponseEntity<?> listDePlatosVeganos() {

        List<Plato> ListaDePlatos = this.psimpl.buscarPlatoVegano();

        return ResponseEntity.ok(ListaDePlatos);

    }
    
    @GetMapping
    @RequestMapping(value = "listaDePrincipales", method = RequestMethod.GET)
    public ResponseEntity<?> listDePlatosPrincipales() {

        List<Plato> ListaDePlatos = this.psimpl.buscarPrincipales();

        return ResponseEntity.ok(ListaDePlatos);

    }
    
    @GetMapping
    @RequestMapping(value = "listaDePostres", method = RequestMethod.GET)
    public ResponseEntity<?> listDePostres() {

        List<Plato> ListaDePlatos = this.psimpl.buscarPostres();

        return ResponseEntity.ok(ListaDePlatos);

    }
    
    @GetMapping
    @RequestMapping(value = "listaDeBebidas", method = RequestMethod.GET)
    public ResponseEntity<?> listDeBebidas() {

        List<Plato> ListaDePlatos = this.psimpl.buscarBebidas();

        return ResponseEntity.ok(ListaDePlatos);

    }
    @GetMapping
    @RequestMapping(value = "listaDeAcompañamientos", method = RequestMethod.GET)
    public ResponseEntity<?> listDeAcompañamientos() {
    	
    	List<Plato> ListaDePlatos = this.psimpl.buscarAcompañamientos();
    	
    	return ResponseEntity.ok(ListaDePlatos);
    	
    }
    
    @PostMapping
    @RequestMapping(value = "crearPlato", method = RequestMethod.POST)
    public ResponseEntity<?> crearPlato(@RequestBody Plato plato){

        Plato platoCreado = this.psimpl.crearPlato(plato);

        return ResponseEntity.status(HttpStatus.CREATED).body(platoCreado);

    }

    @PutMapping
    @RequestMapping(value = "modificarPlato", method = RequestMethod.PUT)
    public ResponseEntity<?> modificarPlato(@RequestBody Plato plato) {

        Plato platoModificado = this.psimpl.modificarPlato(plato);

        return ResponseEntity.status(HttpStatus.CREATED).body(platoModificado);
    }

    @GetMapping
    @RequestMapping(value = "buscarPlato/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> buscarPlato(@PathVariable int id){

        Plato plato = this.psimpl.buscarPlato(id);

        return ResponseEntity.ok(plato);

    }
    
    @DeleteMapping
    @RequestMapping(value = "eliminarPlato/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarPlato(@PathVariable int id){

        this.psimpl.eliminarPlato(id);

        return ResponseEntity.ok().build();

    }
    
}
