package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.Invoice;
import com.kindsonthegenius.fleetapp.repositories.InvoiceRepository;

@Service
public class InvoiceService {

	@Autowired
	private InvoiceRepository invoiceRepository;
	
	//Get All Invoices
	public List<Invoice>getInvoices(){
		return invoiceRepository.findAll();
	}
	
	//Update Invoice
	public void save(Invoice invoice) 
	{
		invoiceRepository.save(invoice);
	}
	
	//Get Invoice By Id
	public Optional<Invoice> findById(int id)
	{
		return invoiceRepository.findById(id);
	}
	
	//Delete Invoice
	public void delete(Integer id) {
		
		invoiceRepository.deleteById(id);
	}
}
