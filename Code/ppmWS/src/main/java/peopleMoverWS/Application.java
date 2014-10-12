package peopleMoverWS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import peopleMoverWS.util.TSOLookupService;

@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application {

    public static void main(String[] args) {
    	
        //SpringApplication.run(Application.class, args);
       SpringApplication.run(new Object[]{Application.class, TSOLookupService.class}, args);
    	//ApplicationContext context= new ClassPathXmlApplicationContext("applicationContext.xml");
    }
}