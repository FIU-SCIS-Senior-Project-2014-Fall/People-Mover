package peopleMoverWS.controller;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import peopleMoverDB.dao.UserDAO;
import peopleMoverDB.model.User;
import peopleMoverWS.util.EmailManager;


@RestController
public class UserAuth {
	@RequestMapping("/userauth")
	public String getUserAuth(@RequestParam(value="islogin", required=true)String islogin,@RequestParam(value="email", required=true) String email,@RequestParam(value="pass", required=true) String pass) 
	{
		String token="";
		token = getUserAuthCx(islogin,email, pass);
		
		
		return token ;
	}
	private String getUserAuthCx(String isLogin,String email, String pass)
	{
		boolean validemail = EmailManager.emailCheck(email);
		if(validemail)
		{
			//Get the Spring Context
			ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("spring.xml");
			//To use JdbcTemplate
			UserDAO loginUserDAO = ctx.getBean("UserDAOJDBCTemplate", UserDAO.class);
			String token  = EmailManager.generateToken();
			User loginUser = new User();
			loginUser.setToken(token);
			loginUser.setEmail(email);
			loginUser.setPassword(pass);
			if(isLogin.equalsIgnoreCase("true"))
			{
				String newtoken  = loginUserDAO.getByEmail(email, pass);
				ctx.close();
				
				if(!newtoken.isEmpty())
					return newtoken;
				else
					return "Not Match";
			}
			else {
				int out  = loginUserDAO.save(loginUser);
				ctx.close();
				if(out!=0)
					return token;
				else
					return "Insertion Error";
				}
			
			
			
		}
		else
			return "not valid email";
	}
}
