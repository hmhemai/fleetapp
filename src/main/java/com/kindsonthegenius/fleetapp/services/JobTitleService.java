package com.kindsonthegenius.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kindsonthegenius.fleetapp.models.JobTitle;
import com.kindsonthegenius.fleetapp.repositories.JobTitleRepository;

@Service
public class JobTitleService {

	@Autowired
	private JobTitleRepository jobTitleRepository;
	
	//Get All JobTitles
	public List<JobTitle> getJobTitles(){
		return jobTitleRepository.findAll();
	}
	
	//Update JobTitle
	public void save(JobTitle jobTitle) 
	{
		jobTitleRepository.save(jobTitle);
	}
	
	//Get JobTitle By Id
	public Optional<JobTitle> findById(int id)
	{
		return jobTitleRepository.findById(id);
	}
	
	//Delete JobTitle
	public void delete(Integer id) {
		//The object of the warehouse,the method of accessing this class,
		//and connecting to the repository
		jobTitleRepository.deleteById(id);
	}
}
