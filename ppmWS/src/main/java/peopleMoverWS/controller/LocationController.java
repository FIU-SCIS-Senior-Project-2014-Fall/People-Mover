package peopleMoverWS.controller;




import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import peopleMoverWS.MyCx;
import peopleMoverWS.PropertyReader;
import peopleMoverWS.model.Location;
import peopleMoverWS.model.ValidateUser;

@RestController
public class LocationController {
	@RequestMapping("/getlocation")
	public Location getLocation(@RequestParam(value="filterBy", required=true) String filterBy,@RequestParam(value="id", required=true) String id) 
	{
		Location loc = getLocationCx(filterBy, id);
		return loc ;
	}
	private Location getLocationCx(String filter,String filterId)
	{
		 String filename = "ppmWS.properties";
		  String login="";
		  String password="";
	      String domain = "";
	      String userValidationRequest="";
	      String locationRequest="";
		  PropertyReader propReader = new PropertyReader(filename);
		  try {
			 login=propReader.getProperty("login");
			 password = propReader.getProperty("password");
			 domain = propReader.getProperty("domain");
			 userValidationRequest = propReader.getProperty("userValidationRequest");
			 locationRequest = propReader.getProperty("locationRequest");	 
			 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	        ValidateUser vu = new ValidateUser(login,password);
	        String urlParameters = "login="+vu.getLogin()+"&password="+vu.getPass()+"&AppId="+vu.getAppId()+"&IPAddress=";	 
	        userValidationRequest= domain+userValidationRequest;       

	         ValUserHandler valUserHlnd = new ValUserHandler(vu);
	         MyCx mc = new MyCx();
	         mc.GetCx(urlParameters, userValidationRequest, valUserHlnd);	         
	         String token  = vu.getToken();
	         	         
	         String urlParamLocation = "token="+token+"&filterBy="+filter+"&id="+filterId;
	         locationRequest = domain+locationRequest;
	        
	         MyCx mcLocation = new MyCx();
	         LocationHandler locHnld = new LocationHandler();	        
	         mcLocation.GetCx(urlParamLocation, locationRequest, locHnld);
	         //System.out.println(vu.getToken());
	         
	           return locHnld.getLocation();
	         
	}

}
