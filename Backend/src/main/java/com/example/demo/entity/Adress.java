package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Adress {
    String flatNumber;
    String houseNumber;
    String street;
    String city;
    String zipCode;
}
