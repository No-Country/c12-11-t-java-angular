package com.proyecto.controladores;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControladorInicio {
	
	@GetMapping("/container/home")
	public String InicioLogin() {
		 return "home.html" ;
	}
}
