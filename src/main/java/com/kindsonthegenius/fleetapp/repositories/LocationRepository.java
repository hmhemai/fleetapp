package com.kindsonthegenius.fleetapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kindsonthegenius.fleetapp.models.Location;
@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {
//The local repository class inherits the jpa warehouse class.The local repository class can use the methods of the JPA repository class
}
