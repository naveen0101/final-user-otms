package com.dxc.usermgt.dao;

import java.util.List;

import com.dxc.usermgt.entities.User;

public interface IUserDao {
     List<User> listAllUsers();


     void deleteUser(Integer userId);

	  User  updateUser(User user);
	  User findUserById(Integer userId);

	User addUser(User user);
	  
	

}

