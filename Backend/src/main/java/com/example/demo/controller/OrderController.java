package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.example.demo.entity.FlowerCategory;
import com.example.demo.repository.CustomerRepository;



@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	private CustomerRepository customerRepository;

	@GetMapping("/")
	public List<Customer> getAllOrders(){
		return (List<Customer>) customerRepository.findAll();
	}
	
	@PostMapping("/")
	public void addOrder(@RequestBody Customer customer) {
//		Flower flower = new Flower();
//		flower.setId(customer.getFlowers().get(0).getId());
//		flower.setImageURL(customer.getFlowers().get(0).getImageURL());
//		flower.setCategory(customer.getFlowers().get(0).getCategory());
//		flower.setName(customer.getFlowers().get(0).getName());
//		flower.setQuantity(customer.getFlowers().get(0).getQuantity());
//		flower.setPrice(customer.getFlowers().get(0).getPrice());
	//	customer.add(flower);
	//	customerRepository.save(customer);
	//	return new ResponseEntity<>(HttpStatus.CREATED);
//		Order newOrder=new Order();
//		newOrder.setCustomer(customer);
		//System.out.print(customer.getItems().get(0));
		
		customerRepository.save(customer);
	}
}
