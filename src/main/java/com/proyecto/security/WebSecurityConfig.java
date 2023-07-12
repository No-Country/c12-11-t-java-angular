package com.proyecto.security;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;



//@Configuration
//public class WebSecurityConfig {
	
//	@Bean
//	SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authManager) {
//		
//		return http
//				.cors(cors -> cors.disable()).csrf(csrf ->csrf.disable())
//				.exceptionHandling(e->e.AuthenticationEntryPoint())
//				.sessionManagments(s->s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//				.authorizeHttpRequests(a->
//				{a.requestMatchers("/auth/**").permitAll();			
//				})
//				.authenticationProvider(authenticationProvider())
//				.addFilterBefore(JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
//				.apply(new JWTHTTPConfigurer(jwtUtils));
//	}
	
//	@Bean
//	UserDetailService userDetailService() {
//		
//	}
//	@Bean
//	DataSource dataSource() {
//		return new EmbeddedDatabaseBuilder()
//			.setType()
//			.addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
//			.build();
//	}
//}
