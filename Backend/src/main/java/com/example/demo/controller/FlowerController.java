package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.advice.NotFoundException;
import com.example.demo.entity.Flower;
import com.example.demo.repository.FlowerRepository;

@RestController
@RequestMapping("/flowers")

public class FlowerController {
	@Autowired
	private FlowerRepository flowerRepo;
	@GetMapping("/")
	public List<Flower> getAllFlowers(){
		return (List<Flower>) flowerRepo.findAll();
	}  
	
	@GetMapping("/{flowerId}")
	public Optional<Flower> getFlower(@PathVariable Long flowerId) {
		Optional<Flower> theFlower = flowerRepo.findById(flowerId);
		if(theFlower.isEmpty())
			throw new NotFoundException("Flower id not found - " + flowerId);
		return theFlower;
	}
	
	@PostMapping("/")
	public ResponseEntity<Flower> addFlower(@RequestBody Flower flower) {
		System.out.println(flower);
		flowerRepo.save(flower);
		return new ResponseEntity<>(HttpStatus.CREATED);	
	}
	@PutMapping("/{flowerId}")
	public Flower updateFlower(@PathVariable Long flowerId,@RequestBody Flower newFlower) {
		  return flowerRepo.findById(flowerId).map(flower -> {
			  flower.setName(newFlower.getName());
			  flower.setNumber(newFlower.getNumber());
			  flower.setPrice(newFlower.getPrice());
			  flower.setImageURL(newFlower.getImageURL());
		        return flowerRepo.save(flower);
		      }).orElseThrow(() -> {
		    	  throw new NotFoundException("Flower id not found - " + flowerId);
		        });

		
	}
	@DeleteMapping("/{flowerId}")
	public ResponseEntity<Void> deleteFlower(@PathVariable Long flowerId){
		flowerRepo.deleteById(flowerId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
