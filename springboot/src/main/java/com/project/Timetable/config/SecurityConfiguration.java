package com.project.Timetable.config;

import com.project.Timetable.user.Permission;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.project.Timetable.user.Role.LECTURER;
import static com.project.Timetable.user.Role.STUDENT;
import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers(
                        "/api/v1/auth/**")
                .permitAll()

                .requestMatchers("/api/v1/management/**").hasAnyRole(LECTURER.name(), STUDENT.name())

                .requestMatchers(GET, "/api/v1/management/**").hasAnyAuthority(Permission.LECTURER_READ.name(), Permission.STUDENT_READ.name())
                .requestMatchers(POST, "/api/v1/management/**").hasAnyAuthority(Permission.LECTURER_CREATE.name(), Permission.STUDENT_CREATE.name())
                .requestMatchers(PUT, "/api/v1/management/**").hasAnyAuthority(Permission.LECTURER_UPDATE.name(), Permission.STUDENT_UPDATE.name())
                .requestMatchers(DELETE, "/api/v1/management/**").hasAnyAuthority(Permission.LECTURER_DELETE.name(), Permission.STUDENT_DELETE.name())

                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        ;

        return http.build();
    }
}
