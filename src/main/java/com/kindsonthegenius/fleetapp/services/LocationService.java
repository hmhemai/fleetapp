package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.Location;
import com.kindsonthegenius.fleetapp.repositories.LocationRepository;

@Service
public class LocationService {

	@Autowired
	private LocationRepository locationRepository;
	
	//Get All Locations
	public List<Location> getLocations(){
		return locationRepository.findAll();
	}
	
	//Update Location
	public void save(Location location) 
	{
		locationRepository.save(location);
	}
	
	//Get Location By Id
	public Optional<Location> findById(int id)
	{
		return locationRepository.findById(id);
	}
	
	//Delete Location
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		locationRepository.deleteById(id);
	}
}
