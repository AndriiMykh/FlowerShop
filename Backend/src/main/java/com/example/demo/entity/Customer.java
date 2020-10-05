package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", referencedColumnName = "id")
	private Adress adress;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "card_id", referencedColumnName = "id")
	private Card card;
	@OneToMany
	  @JoinTable
	  (		name="Orders",
	      joinColumns={ @JoinColumn(name="Customer_ID", referencedColumnName="id") },
	      inverseJoinColumns={ @JoinColumn(name="Flower_id", referencedColumnName="id", unique=true),
	    		  @JoinColumn(name="Quantity",referencedColumnName="quantity") })
	private List<Flower> flowers= new ArrayList<>();
	//private List<CardItem> items= new ArrayList<>();
//	public void add(CardItem item) {
//		items.add(item);
//		item.setCustomer(this);
//	}

}
