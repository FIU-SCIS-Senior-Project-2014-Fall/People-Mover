package peopleMoverWS.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import peopleMoverWS.model.Location;


@RestController
public class UserAuth {
	@RequestMapping("/userauth")
	public String getUserAuth(@RequestParam(value="email", required=true) String email,@RequestParam(value="pass", required=true) String pass) 
	{
		String token = getUserAuthCx(email, pass);
		return token ;
	}
	private String getUserAuthCx(String email, String pass)
	{
		
		return "";
	}
}
