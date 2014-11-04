package peopleMoverWS.controller;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import peopleMoverDB.dao.UserDAO;
import peopleMoverDB.model.User;
import peopleMoverWS.util.EmailManager;
import peopleMoverWS.model.FormattedMessage;

@RestController
public class UserAuth {
	@RequestMapping("/userauth")
	public FormattedMessage getUserAuth(@RequestParam(value="islogin", required=true)String islogin,@RequestParam(value="email", required=true) String email,@RequestParam(value="pass", required=true) String pass) 
	{

		FormattedMessage fMessage;
		fMessage = getUserAuthCx(islogin,email, pass);
		
		
		return fMessage ;
	}
	private FormattedMessage getUserAuthCx(String isLogin,String email, String pass)
	{;
		FormattedMessage fMessage = new FormattedMessage();
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
				{
					fMessage.setMessage(newtoken);
					fMessage.setCode("1");
					return fMessage;
				}
				else
				{
					fMessage.setMessage("Not Match");
					fMessage.setCode("0");
					return fMessage;
					
				}
			}
			else {
				int out  = loginUserDAO.save(loginUser);
				ctx.close();
				if(out!=0)
					{
					fMessage.setMessage(token);
					fMessage.setCode("1");
					return fMessage;
					}
				else
				{
					fMessage.setMessage("Insertion Error");
					fMessage.setCode("0");
					return fMessage;
					
				}
			}
			
			
			
		}
		else
		{
			fMessage.setMessage("not valid email");
			fMessage.setCode("0");
			return fMessage;
			
		}
	}
}