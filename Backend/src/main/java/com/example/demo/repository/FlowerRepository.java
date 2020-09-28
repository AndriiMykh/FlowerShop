package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Flower;

@Repository
public interface FlowerRepository extends CrudRepository<Flower, Long> {
	@Query("Select a from Flower a where category.category_id=:categoryid")
	List<Flower> findByCategory(@Param("categoryid")Long categoryId);
}
