package com.kindsonthegenius.fleetapp.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import com.kindsonthegenius.fleetapp.models.Invoice;
import com.kindsonthegenius.fleetapp.services.ClientService;
import com.kindsonthegenius.fleetapp.services.InvoiceService;
import com.kindsonthegenius.fleetapp.services.InvoiceStatusService;

@Controller
public class InvoiceController {

	@Autowired private InvoiceService invoiceService;
	@Autowired private InvoiceStatusService invoiceStatusService;
	@Autowired private ClientService clientService;
	
	//Get All Invoices
	@GetMapping("/invoices")		 
	public String getInvoices(Model model) {/*下拉菜单联系到控制器里的数据获取*/
		model.addAttribute("invoices", invoiceService.getInvoices());	
		
		model.addAttribute("clients", clientService.getClients());
		model.addAttribute("invoiceStatuses", invoiceStatusService.getInvoiceStatuses());
	
		return "Invoice";
	}
	
	
	@RequestMapping("invoices/findById")
	@ResponseBody
	public Optional<Invoice> findById(Integer id) 
	{
		return invoiceService.findById(id);
	}
	//Add Invoice
	@PostMapping("/invoices/addNew")
	public String addNew(Invoice invoice) 
	{
		invoiceService.save(invoice);
		return "redirect:/invoices";
	}
	
	
	@RequestMapping(value="/invoices/update",method= {RequestMethod.PUT,RequestMethod.GET})
	public String update(Invoice invoice) 
	{
		invoiceService.save(invoice);
		return "redirect:/invoices";
	}

	@RequestMapping(value="/invoices/delete",method= {RequestMethod.DELETE,RequestMethod.GET})
	public String update(Integer id) 
	{
		invoiceService.delete(id);
		return "redirect:/invoices";
	}
}
