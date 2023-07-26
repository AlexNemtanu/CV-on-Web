package ro.digitalnation.cvonweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class CvOnWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(CvOnWebApplication.class, args);
    }

}
