package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Adress {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String flatNumber;
	private String houseNumber;
	private String street;
	private String city;
	private String zipCode;
}
