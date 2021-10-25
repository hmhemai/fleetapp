package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.EmployeeType;
import com.kindsonthegenius.fleetapp.repositories.EmployeeTypeRepository;

@Service
public class EmployeeTypeService {

	@Autowired
	private EmployeeTypeRepository employeeTypeRepository;
	
	//Get All EmployeeTypes
	public List<EmployeeType> getEmployeeTypes(){
		return employeeTypeRepository.findAll();
	}
	
	//Update EmployeeType
	public void save(EmployeeType employeeType) 
	{
		employeeTypeRepository.save(employeeType);
	}
	
	//Get EmployeeType By Id
	public Optional<EmployeeType> findById(int id)
	{
		return employeeTypeRepository.findById(id);
	}
	
	//Delete EmployeeType
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		employeeTypeRepository.deleteById(id);
	}
}
