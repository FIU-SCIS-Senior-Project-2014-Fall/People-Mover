package peopleMoverDB.dao;
import java.util.List;
import peopleMoverDB.model.User;

public interface UserDAO {
	//CRUD operations
	     
	    //Create
	    public void save(User user);
	    //Read
	    public User getByToken(String token);
	    //Update
	    public void update(User user);
	    //Delete
	    public void deleteByToken(String token);
	    //Get All
	    public List<User> getAll();
}