package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.VehicleType;
import com.kindsonthegenius.fleetapp.repositories.VehicleTypeRepository;

@Service
public class VehicleTypeService {

	@Autowired
	private VehicleTypeRepository vehicleTypeRepository;
	
	//Get All VehicleTypes
	public List<VehicleType> getVehicleTypes(){
		return vehicleTypeRepository.findAll();
	}
	
	//Update VehicleType
	public void save(VehicleType vehicleType) 
	{
		vehicleTypeRepository.save(vehicleType);
	}
	
	//Get VehicleType By Id
	public Optional<VehicleType> findById(int id)
	{
		return vehicleTypeRepository.findById(id);
	}
	
	//Delete VehicleType
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		vehicleTypeRepository.deleteById(id);
	}
}
