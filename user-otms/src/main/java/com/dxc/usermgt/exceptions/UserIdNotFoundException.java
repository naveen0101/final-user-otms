package com.dxc.usermgt.exceptions;

public class UserIdNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public UserIdNotFoundException(String msg) {
		super(msg);
	}
	public UserIdNotFoundException(String msg,Throwable S) {
		super(msg,S);
	}

}