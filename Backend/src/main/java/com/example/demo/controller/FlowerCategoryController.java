package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Flower;
import com.example.demo.entity.FlowerCategory;
import com.example.demo.repository.FlowerCategoryRepository;

@RestController
@RequestMapping("/flowers-category")
public class FlowerCategoryController {
	
	@Autowired
	FlowerCategoryRepository flowerCategoryRepository;
	
	@GetMapping("/")
	public List<FlowerCategory> getAllFlowersCategories(){
		return (List<FlowerCategory>) flowerCategoryRepository.findAll();
	}  
}
