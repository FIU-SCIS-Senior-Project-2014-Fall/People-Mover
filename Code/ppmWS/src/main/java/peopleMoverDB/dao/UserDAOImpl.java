package peopleMoverDB.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import peopleMoverDB.model.User;

public class UserDAOImpl implements UserDAO{
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource)
	{
		this.dataSource = dataSource;
	}
	@Override
	public void save(User user)
	{
		String query = "insert into User (token,email,password) values (?,?,?)";
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		
		Object[] args = new Object[]{user.getToken(),user.getEmail(),user.getPassword()};
		int out = jdbcTemplate.update(query,args);
		
		if(out!=0)
		{
			 System.out.println("User saved with id="+user.getToken());
        }else System.out.println("User save failed with id="+user.getToken());
		
	}
	@Override
	public User getByToken(String token)
	{
		String query = "select token, email, password from User where token= ?";
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		
		User user = jdbcTemplate.queryForObject(query,new Object[]{token}, new RowMapper<User>(){
			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException
			{
				User user = new User();
				user.setToken(rs.getString("token"));
				user.setEmail(rs.getString("email"));
				user.setPassword(rs.getString("password"));
				return user;
			}
			
		});
		return user;
	}
	@Override
	public void update(User user) {
		String query = "update User set email=?, password=? where token=?";
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		Object[] args = new Object[] {user.getEmail(), user.getPassword(), user.getToken()};
		
		int out = jdbcTemplate.update(query, args);
		if(out !=0){
			System.out.println("User updated with id="+user.getToken());
		}else System.out.println("No User found with id="+user.getToken());
	}
	@Override
	public void deleteByToken(String token) {

		String query = "delete from User where token=?";
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		
		int out = jdbcTemplate.update(query,token);
		if(out !=0){
			System.out.println("User deleted with id="+token);
		}else System.out.println("No User found with id="+token);
	}
	@Override
	public List<User> getAll() {
		String query = "select token, email, password from User";
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		List<User> userList = new ArrayList<User>();

		List<Map<String,Object>> userRows = jdbcTemplate.queryForList(query);
		
		for(Map<String,Object> userRow : userRows){
			User user = new User();
			user.setToken(String.valueOf(userRow.get("token")));
			user.setEmail(String.valueOf(userRow.get("email")));
			user.setPassword(String.valueOf(userRow.get("password")));
			userList.add(user);
		}
		return userList;
	}
}
