package com.example.CRUD.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CRUD.model.Product;

public interface Repository extends JpaRepository<Product, Long> {
	List<Product> findByStatus(boolean status);
	List<Product> findByTitleContaining(String title);
}