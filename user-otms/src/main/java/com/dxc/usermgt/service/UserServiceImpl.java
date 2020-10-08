package com.dxc.usermgt.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxc.usermgt.dao.UserDaoImpl;
import com.dxc.usermgt.entities.User;
import com.dxc.usermgt.exceptions.NoUserFoundException;
import com.dxc.usermgt.exceptions.UserIdNotFoundException;


@Transactional 
@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	UserDaoImpl dao;
	
	//Add user
	@Override
	public User addUser(User user) {
		validate(user);
		return dao.addUser(user);
	}

	//For User list
	@Override
	public List<User> listAllUsers() {
		return dao.listAllUsers();
	}

	
	//Find by Id
	@Override
	public User findUserById(Integer userId) {
		validate(userId);
		return dao.findUserById(userId);
	}
	
	//Delete user
	@Override
	public void deleteUser(Integer userId) {
		validate(userId);
		dao.deleteUser(userId);
	}
	
	
	//Update user
	@Override
	public User updateUser(User user) {
		return dao.updateUser(user);
	}
	
	//Validate user
	private void validate(Object obj) {
		if (obj == null) {
			throw new UserIdNotFoundException("given argument is null");
		}
	}
	
}
