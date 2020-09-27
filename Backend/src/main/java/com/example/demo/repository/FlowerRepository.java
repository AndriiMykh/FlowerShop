package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Flower;

@Repository
public interface FlowerRepository extends CrudRepository<Flower, Long> {
}
