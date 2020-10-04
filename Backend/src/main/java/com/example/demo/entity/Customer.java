package com.example.demo.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Customer {
		String firstName;
		String lastName;
		String email;
		Adress adress;
		Card card;
		List<CardItem> items;
}
