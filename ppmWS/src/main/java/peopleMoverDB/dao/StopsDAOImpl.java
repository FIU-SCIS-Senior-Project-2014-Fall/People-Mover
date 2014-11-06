package peopleMoverDB.dao;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

import peopleMoverDB.model.Stops;

public class StopsDAOImpl implements StopsDAO {
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource)
	{
		this.dataSource = dataSource;
	}
////CRUD operations
//    
//    //Create
//    public int save(Stops stop) throws ParseException
//    {
//    	//Needs To be Implemented.
//    	return 1;
//    }
//    //Read
//    public Stops getByRouteId(String RouteId)
//    {
//    	
//    }
//    //Update
//    public int update(Stops location);
//    //Delete
//    public int deleteByStopsID(String StopsID);
    //Get All
    public List<Stops>  getListByRouteID(String RouteId)
    {
    	String query = "select ID,RouteID,Street,Latitude,Longitude,ScheduledArrive from Stops where RouteID=?";
    	JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
    	List<Stops> stoplist = new ArrayList<Stops>();
    	List<Map<String,Object>> stopRows = jdbcTemplate.queryForList(query,RouteId);
    	
    	for(Map<String,Object> stopRow : stopRows){
    	Stops stop = new Stops();
    	stop.setStopId(String.valueOf(stopRow.get("ID")));
    	stop.setRouteId(String.valueOf(stopRow.get("RouteID")));
    	stop.setStreet(String.valueOf(stopRow.get("Street")));
    	stop.setLatitude(String.valueOf(stopRow.get("Latitude")));
    	stop.setLongitude(String.valueOf(stopRow.get("Longitude")));
    	stop.setScheduledTime(String.valueOf(stopRow.get("ScheduledArrive")));
    	stoplist.add(stop);
    	}
    	return stoplist;
    	
    }
}
