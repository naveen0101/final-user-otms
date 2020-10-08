package com.dxc.usermgt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.usermgt.dto.CreateUserRequest;
import com.dxc.usermgt.dto.UpdateDetailsUser;
import com.dxc.usermgt.entities.User;
import com.dxc.usermgt.service.UserServiceImpl;




@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserServiceImpl service;
	
//Adding User
	
	@PostMapping("/adduser")
	@ResponseStatus(HttpStatus.OK)
	public User addUser(@RequestBody CreateUserRequest requestData) {
		String userRole = requestData.getUserRole();
		String userName = requestData.getUserName();
		String password = requestData.getPassword();
		User user = new User(userRole, userName,password);
		user= service.addUser(user);
		return user;
	}
	
	
	//Get User list 
	@GetMapping("/alluser")
	public List<User> allUsers() {
		List<User> list = service.listAllUsers();
		return list;

	}
	
	
	// delete Id
	
	@DeleteMapping("/delete/{id}")
	public void DeleteUserById(@PathVariable("id") Integer userId) {
		service.deleteUser(userId);		
	}
	
	
	
	// Find user by id
	@GetMapping("/get/{id}")
	public User findUserById(@PathVariable("id") Integer userId) {
		User user = service.findUserById(userId);
		return user;
	}
	
	
	//update id
	@PutMapping("/update")
	public User updateUser(@RequestBody UpdateDetailsUser requestData) {
		Integer userId = requestData.getUserId();
		String userRole = requestData.getUserRole();
		String userName = requestData.getUserName();
		String password = requestData.getPassword();
		User user = new User(userRole, userName, password);
		user.setUserId(userId);
		user = service.updateUser(user);
		return user;
	}

}



