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
		  //String temp;
	        ValidateUser vu = new ValidateUser("vpinecrest", "0102");
	        String urlParameters = "login="+vu.getLogin()+"&password="+vu.getPass()+"&AppId="+vu.getAppId()+"&IPAddress=";
	        String domain = "http://www.tsoapi.com";
	        String userValRequest = domain+"/Authentication.asmx/ValidateUser";
	        
	        
	        
	       
	        String unitListRequest = domain+"/Units.asmx/GetUnitList";

	         ValUserHandler valUserHlnd = new ValUserHandler(vu);
	         MyCx mc = new MyCx();
	         mc.GetCx(urlParameters, userValRequest, valUserHlnd);
	         
	         String token  = vu.getToken();
	         String urlParamUnitList = "token="+token;
	         
	        
	         MyCx mcUnitL = new MyCx();
	         GetUnitListHandler gUnitListHlnd = new GetUnitListHandler();
	        
	         mcUnitL.GetCx(urlParamUnitList, unitListRequest, gUnitListHlnd);
	         //System.out.println(vu.getToken());
	         List<Unit> uList = gUnitListHlnd.getUnitList();
	           return uList;
	 }
	 
	 

}
