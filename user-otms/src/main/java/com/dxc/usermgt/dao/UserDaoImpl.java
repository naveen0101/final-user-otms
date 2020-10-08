package com.dxc.usermgt.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dxc.usermgt.entities.User;
import com.dxc.usermgt.exceptions.NoUserFoundException;


@Repository
@Service
public class UserDaoImpl implements IUserDao {
	
	@PersistenceContext
	private EntityManager entitymanager;
	

	
	
	// Adding user method
	
	@Override
	public User addUser(User user) {
		entitymanager.persist(user);
		return user;
	}
	
	
	
	//List all users
	@Override
	public List<User> listAllUsers() {
		String jpaquery = "from User";
		TypedQuery<User> query = entitymanager.createQuery(jpaquery, User.class);
		List<User> userList = query.getResultList();
		return userList;
	}
	
	
	
	
	
	//Delete User
	@Override
	public void deleteUser(Integer userId) {
		User user =findUserById(userId);
		entitymanager.remove(user);
	}
	
	
	
	// Update user
	
	@Override
	public User updateUser(User user) {
		entitymanager.merge(user);
		return user;
	}
	
	
	
	// Find by id
	
	@Override
	public User findUserById(Integer userId) {
		User user = entitymanager.find(User.class, userId);
		if (user == null) {
			throw new NoUserFoundException("user not found for id" + userId);
		}
		return user;
	}
	
}


