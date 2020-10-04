package com.example.demo.controller;

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

@RestController
@RequestMapping("/orders")
public class OrderController {
	@PostMapping("/")
	public void addFlower2(@RequestBody Customer customer) {
		System.out.println(customer.getEmail()+customer.getFirstName()+customer.getLastName());
		System.out.println(customer.getAdress().getCity());
		System.out.println(customer.getCard().getCardNumber());
		System.out.println("id:"+customer.getItems().get(0).getId()+" Quantity:"+customer.getItems().get(0).getQuantity());
	}
}
