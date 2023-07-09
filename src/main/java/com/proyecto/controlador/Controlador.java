package com.proyecto.controlador;

import com.proyecto.entidades.Direccion;
import com.proyecto.entidades.Pago;
import com.proyecto.entidades.Pedido;
import com.proyecto.entidades.Plato;
import com.proyecto.servicio.PagoServicioIMPL.PGSIMPL;
import com.proyecto.servicio.direccionServIMPL.DSIMPL;
import com.proyecto.servicio.pedidoServIMPL.PDIMPL;
import com.proyecto.servicio.platoServicioIMPL.PSIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("VeggieDelivery")
public class Controlador {

    @Autowired
    private PSIMPL psimpl;
    @Autowired
    private DSIMPL dsimpl;

    @Autowired
    private PGSIMPL pgsimpl;

    @Autowired
    private PDIMPL pdimpl;


    /* Entidad plato */

    @GetMapping
    @RequestMapping(value = "listaDePlatos", method = RequestMethod.GET)
    public ResponseEntity<?> listDePlatos() {

        List<Plato> ListaDePlatosx = this.psimpl.listaDePlatos();

        return ResponseEntity.ok(ListaDePlatosx);

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

    /*Entidad Direccion*/


    @GetMapping
    @RequestMapping(value = "listaDeDirecciones", method = RequestMethod.GET)
    public ResponseEntity<?> listaDirecciones(){

        List<Direccion> listaDirecciones = this.dsimpl.listaDeDirecciones();

        return ResponseEntity.ok(listaDirecciones);

    }

    @PostMapping
    @RequestMapping(value = "crearDireccion", method = RequestMethod.POST)
    public ResponseEntity<?> crearDireccion(@RequestBody Direccion direccion){

        Direccion direccionCreada = this.dsimpl.crearDireccion(direccion);

        return ResponseEntity.status(HttpStatus.CREATED).body(direccionCreada);

    }

    @PutMapping
    @RequestMapping(value = "modificarDireccion", method = RequestMethod.PUT)
    public ResponseEntity<?> modificarDireccion(@RequestBody Direccion direccion){

        Direccion direccionModificada = this.dsimpl.modificarDireccion(direccion);

        return ResponseEntity.status(HttpStatus.CREATED).body(direccionModificada);

    }

    @GetMapping
    @RequestMapping(value = "buscarDireccion/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> buscarDireccion(@PathVariable int id){

        Direccion direccion = this.dsimpl.buscarDireccion(id);

        return ResponseEntity.ok(direccion);

    }

    @DeleteMapping
    @RequestMapping(value = "eliminarDireccion/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarDireccion(@PathVariable int id){

        this.dsimpl.eliminarDireccion(id);

        return ResponseEntity.ok().build();

    }

    /* Entidad Pago */

    @GetMapping
    @RequestMapping(value = "listaDePagos", method = RequestMethod.GET)
    public ResponseEntity<?> listaPagos(){
        List<Pago> listaDePagos = this.pgsimpl.listaDePagos();

        return ResponseEntity.ok(listaDePagos);
    }

    @PostMapping
    @RequestMapping(value = "crearPago", method = RequestMethod.POST)
    public ResponseEntity<?> crearPago(@RequestBody Pago pago){

        Pago pagoCreado = this.pgsimpl.crearPago(pago);

        return ResponseEntity.status(HttpStatus.CREATED).body(pagoCreado);

    }

    @PutMapping
    @RequestMapping(value = "modificarPago", method = RequestMethod.PUT)
    public ResponseEntity<?> modificarPago(@RequestBody Pago pago){

        Pago pagoModificado = this.pgsimpl.modificarPago(pago);

        return ResponseEntity.status(HttpStatus.CREATED).body(pagoModificado);

    }

    @GetMapping
    @RequestMapping (value = "consultarPago/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> consultarPago(@PathVariable int id){

        Pago pago = this.pgsimpl.consultarPago(id);

        return ResponseEntity.ok(pago);

    }

    @DeleteMapping
    @RequestMapping(value = "eliminarPago/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarPago(@PathVariable int id){

        this.pgsimpl.eliminarPago(id);

        return ResponseEntity.ok().build();

    }

    /*Entidad Pedido*/

    @GetMapping
    @RequestMapping(value = "listaDePedidos", method = RequestMethod.GET)
    public ResponseEntity<?> listaPedidos(){

        List<Pedido> listaDePedidos = this.pdimpl.listaDePedidos();

        return ResponseEntity.ok(listaDePedidos);

    }

    @PostMapping
    @RequestMapping(value = "crearPedido", method = RequestMethod.POST)
    public ResponseEntity<?> crearPedido(@RequestBody Pedido pedido){

        Pedido pedidoCreado = this.pdimpl.crearPedido(pedido);

        return ResponseEntity.status(HttpStatus.CREATED).body(pedidoCreado);

    }

    @PutMapping
    @RequestMapping(value = "modificarPedido", method = RequestMethod.PUT)
    public ResponseEntity<?> modificarPedido(@RequestBody Pedido pedido){

        Pedido pedidoModificado = this.pdimpl.modificarPedido(pedido);

        return ResponseEntity.status(HttpStatus.CREATED).body(pedidoModificado);
    }

    @GetMapping
    @RequestMapping(value = "consultarPedido/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> consultarPedido(@PathVariable int id){

        Pedido pedido = this.pdimpl.consultarPedido(id);

        return ResponseEntity.ok(pedido);

    }

    @DeleteMapping
    @RequestMapping(value = "eliminarPedido/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarPedido(@PathVariable int id){

        this.pdimpl.eliminarPedido(id);

        return ResponseEntity.ok().build();

    }


}


