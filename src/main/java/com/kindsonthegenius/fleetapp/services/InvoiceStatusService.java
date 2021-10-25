package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.InvoiceStatus;
import com.kindsonthegenius.fleetapp.repositories.InvoiceStatusRepository;

@Service
public class InvoiceStatusService {

	@Autowired
	private InvoiceStatusRepository invoiceStatusRepository;
	
	//Get All InvoiceStatuss
	public List<InvoiceStatus> getInvoiceStatuses(){
		return invoiceStatusRepository.findAll();
	}
	
	//Update InvoiceStatus
	public void save(InvoiceStatus invoiceStatus) 
	{
		invoiceStatusRepository.save(invoiceStatus);
	}
	
	//Get InvoiceStatus By Id
	public Optional<InvoiceStatus> findById(int id)
	{
		return invoiceStatusRepository.findById(id);
	}
	
	//Delete InvoiceStatus
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		invoiceStatusRepository.deleteById(id);
	}
}
