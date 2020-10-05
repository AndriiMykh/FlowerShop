package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.entity.Flower;

import com.example.demo.repository.CustomerRepository;

@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	private CustomerRepository customerRepository;
	
	@PostMapping("/")
	public ResponseEntity<Customer> addOrder(@RequestBody Customer customer) {
		customerRepository.save(customer);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
