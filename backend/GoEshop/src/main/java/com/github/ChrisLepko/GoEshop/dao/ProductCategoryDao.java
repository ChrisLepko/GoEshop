package com.github.ChrisLepko.GoEshop.dao;

import com.github.ChrisLepko.GoEshop.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-categories")
public interface ProductCategoryDao extends JpaRepository<ProductCategory, Long> {
}
