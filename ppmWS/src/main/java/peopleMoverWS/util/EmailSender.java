package peopleMoverWS.util;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.activation.*;
public class EmailSender {
	String host;
	String port;
	final String mailusername;
	final String mailpassword;
	Properties prop;
	Session session;
	public EmailSender(String host, String port, String username, String password )
	{
		this.host = host;
		this.port = port;
		mailusername=username;
		mailpassword=password;
		prop = new Properties();
		prop.put("mail.smtp.host", this.host);
		prop.put("mail.smtp.socketFactory.port", this.port);
		prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		prop.put("mail.smtp.auth", "true");
		prop.put("mail.smtp.port", this.port);
		
		session = Session.getDefaultInstance(prop,
				new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(mailusername,mailpassword);
					}
				});
	}

	public boolean  Send(String fromAddress,String toAddress, String subjectAddress, String messageAddress)
	{
		try{
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(fromAddress));
			message.setRecipients(Message.RecipientType.TO,
					InternetAddress.parse(toAddress));
			message.setSubject(subjectAddress);
			message.setText(messageAddress);
			// Send message
			Transport.send(message);
			return true;
			
		}
		catch(MessagingException e)
		{
			e.printStackTrace();
		}
		
		return false;
	}
}
