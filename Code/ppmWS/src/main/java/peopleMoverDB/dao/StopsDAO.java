package peopleMoverDB.dao;

import java.text.ParseException;
import java.util.List;

import peopleMoverDB.model.Stops;

public interface StopsDAO {

	//CRUD operations
    
//    //Create
//    public int save(Stops stop) throws ParseException;
//    //Read
//    public Stops getByRouteId(String RouteId);
//    //Update
//    public int update(Stops location);
//    //Delete
//    public int deleteByStopsID(String StopsID);
    //Get All
    public List<Stops> getListByRouteID(String RouteId);
}
