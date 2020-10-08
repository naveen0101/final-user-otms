package com.dxc.usermgt.service;

import java.util.List;

import com.dxc.usermgt.entities.User;

public interface IUserService {
	User addUser(User user);

	User findUserById(Integer userId);

	List<User> listAllUsers();

	User updateUser(User user);

	void deleteUser(Integer userId);


}
