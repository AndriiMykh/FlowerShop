package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Card {
    String nameOnCard;
    String cardNumber;
    String securityCode;
    String expirationMonth;
    String expirationYear;
}
