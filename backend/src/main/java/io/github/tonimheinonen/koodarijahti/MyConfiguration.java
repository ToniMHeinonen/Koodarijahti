package io.github.tonimheinonen.koodarijahti;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class MyConfiguration implements WebMvcConfigurer {
 
    /**
     * Allows other origins to access this data.
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "OPTIONS", "POST", "PUT", "DELETE");
    }
}