package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.VehicleModel;
import com.kindsonthegenius.fleetapp.repositories.VehicleModelRepository;

@Service
public class VehicleModelService {

	@Autowired
	private VehicleModelRepository vehicleModelRepository;
	
	//Get All VehicleModels
	public List<VehicleModel> getVehicleModels(){
		return vehicleModelRepository.findAll();
	}
	
	//Update VehicleModel
	public void save(VehicleModel vehicleModel) 
	{
		vehicleModelRepository.save(vehicleModel);
	}
	
	//Get VehicleModel By Id
	public Optional<VehicleModel> findById(int id)
	{
		return vehicleModelRepository.findById(id);
	}
	
	//Delete VehicleModel
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		vehicleModelRepository.deleteById(id);
	}
}
