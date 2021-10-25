package com.kindsonthegenius.fleetapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.User;
import com.kindsonthegenius.fleetapp.models.UserPrincipal;
import com.kindsonthegenius.fleetapp.repositories.UserRepository;


@Service

public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user=userRepository.findByUsername(username);
		
		if(user == null) {
			  throw new UsernameNotFoundException("User not found!");
		}
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		return new UserPrincipal(user);
	}

}
