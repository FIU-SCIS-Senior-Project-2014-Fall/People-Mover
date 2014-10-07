package peopleMoverWS.util;


import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
public class EmailManager {
	
	public static boolean emailCheck(String email)
	{
		boolean isValid = false;
		try {
			//
			// Create InternetAddress object and validated the supplied
			// address which is this case is an email address.
			InternetAddress internetAddress = new InternetAddress(email);
			internetAddress.validate();
			isValid = true;
		} catch (AddressException e) {
			System.out.println(" AddressException Occurred for: " + email);
		}
		return isValid;
	}

}
