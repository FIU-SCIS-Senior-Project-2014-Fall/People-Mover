package peopleMoverWS;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UnitListController {
	
	 @RequestMapping("/getunitlist")
	    public List<?> getunitlist() {
	        
		 
		 
		 return ListUnitCx();
	    }
	 private List<Unit> ListUnitCx()
	 {
		  String filename = "ppmWS.properties";
		  String login="";
		  String password="";
	      String domain = "";
	      String userValidationRequest="";
	      String unitListRequest="";
		  PropertyReader propReader = new PropertyReader(filename);
		  try {
			 login=propReader.getProperty("login");
			 password = propReader.getProperty("password");
			 domain = propReader.getProperty("domain");
			 userValidationRequest = propReader.getProperty("userValidationRequest");
			 unitListRequest = propReader.getProperty("unitListRequest");	 
			 
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
	         
	         String urlParamUnitList = "token="+token;
	         unitListRequest = domain+unitListRequest;
	        
	         MyCx mcUnitL = new MyCx();
	         UnitListHandler gUnitListHlnd = new UnitListHandler();
	        
	         mcUnitL.GetCx(urlParamUnitList, unitListRequest, gUnitListHlnd);
	         //System.out.println(vu.getToken());
	         List<Unit> uList = gUnitListHlnd.getUnitList();
	           return uList;
	 }
	 
	 

}
