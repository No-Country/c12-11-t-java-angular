package com.proyecto.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


import com.proyecto.servicio.UsuarioServIMPL.USIMPL;


@EnableWebSecurity
@Configuration
public class WebSecurityConfig {
	
	@Autowired
	private USIMPL usuarioServicio;
	
	  @Autowired
	    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
		  auth.userDetailsService(usuarioServicio).passwordEncoder(new BCryptPasswordEncoder());
		  }

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http
	            .authorizeHttpRequests(authorize -> authorize
	                .requestMatchers("/**").permitAll() // Rutas públicas accesibles para todos
	                .anyRequest().authenticated() // Todas las demás rutas requieren autenticación
	            )
	            .formLogin(form -> form
	                .loginPage("/") // Ruta personalizada para la página de inicio de sesión
	                .defaultSuccessUrl("/") // Ruta a la que se redirige después de un inicio de sesión exitoso
	                .permitAll() // Permitir a todos los usuarios acceder a la página de inicio de sesión
	            )
	            .logout(logout -> logout
	                .logoutUrl("/logout") // Ruta para el proceso de cierre de sesión
	                .logoutSuccessUrl("/login?logout") // Ruta a la que se redirige después de un cierre de sesión exitoso
	                .permitAll() // Permitir a todos los usuarios acceder a la página de cierre de sesión
	            );

	        return http.build();
	    }
	}

