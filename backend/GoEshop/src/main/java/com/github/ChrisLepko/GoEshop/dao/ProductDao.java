package com.github.ChrisLepko.GoEshop.dao;

import com.github.ChrisLepko.GoEshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(path = "products")
public interface ProductDao extends JpaRepository<Product, Long> {
}
