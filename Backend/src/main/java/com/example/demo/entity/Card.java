package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nameOnCard;
	private String cardNumber;
	private String securityCode;
	private String expirationMonth;
	private String expirationYear;
}
