package peopleMoverWS.controller;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import peopleMoverDB.dao.UserDAO;
import peopleMoverDB.model.User;
import peopleMoverWS.model.FormattedMessage;
import peopleMoverWS.util.EmailManager;
import peopleMoverWS.util.EmailSender;
import peopleMoverWS.util.PropertyReader;


@RestController
public class EmailSenderController {
	@RequestMapping("/sendemail")
	public FormattedMessage sendEmail(@RequestParam(value="name", required=true)String name,@RequestParam(value="type", required=true)String type,@RequestParam(value="email", required=true) String email,@RequestParam(value="message", required=true) String message) 
	{

		FormattedMessage fMessage;
		fMessage = sendEmailCx(name,type,email, message);
		
		
		return fMessage ;
	}
	private FormattedMessage sendEmailCx(String name,String type,String email, String message)
	{
		FormattedMessage fMessage = new FormattedMessage();
		boolean validemail = EmailManager.emailCheck(email);
		if(validemail)
		{
			String filename = "ppmWS.properties";
			  String emailhost="";
			  String emailport="";
		      String emailusername = "";
		      String emailpassword="";
			  PropertyReader propReader = new PropertyReader(filename);
			  try {
				  emailhost=propReader.getProperty("emailhost");
				  emailport = propReader.getProperty("emailport");
				  emailusername = propReader.getProperty("emailusername");
				  emailpassword = propReader.getProperty("emailpassword");	 
				 
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			EmailSender emailsender = new EmailSender(emailhost,emailport,emailusername, emailpassword);
			
			boolean sent = emailsender.Send(email, "rjmartinez23@gmail.com", "From:"+name+" "+type, message);
			
			if(sent)
			{
				fMessage.setCode("1");
				fMessage.setMessage("Sent email");
				
			}
			else
			{
				fMessage.setCode("0");
				fMessage.setMessage("Unable to send email");
			}
			return fMessage;
		}
		else {
			fMessage.setCode("0");
			fMessage.setMessage("Not valid email");
			return fMessage;
		}
	} 
}
