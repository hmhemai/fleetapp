package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.VehicleStatus;
import com.kindsonthegenius.fleetapp.repositories.VehicleStatusRepository;

@Service
public class VehicleStatusService {

	@Autowired
	private VehicleStatusRepository vehicleStatusRepository;
	
	//Get All VehicleStatuss
	public List<VehicleStatus> getVehicleStatuses(){
		return vehicleStatusRepository.findAll();
	}
	
	//Update VehicleStatus
	public void save(VehicleStatus vehicleStatus) 
	{
		vehicleStatusRepository.save(vehicleStatus);
	}
	
	//Get VehicleStatus By Id
	public Optional<VehicleStatus> findById(int id)
	{
		return vehicleStatusRepository.findById(id);
	}
	
	//Delete VehicleStatus
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		vehicleStatusRepository.deleteById(id);
	}
}
