package com.amol.myapp.repository;

import com.amol.myapp.domain.Customer;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Customer entity.
 */

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	@Query("SELECT c FROM Customer c WHERE lower(c.firstName) like lower(concat('%', ?1,'%'))")
    public List<Customer> findCustomerByFName(String nameToFind);
}
