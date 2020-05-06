package com.github.ChrisLepko.GoEshop.controller;

import com.github.ChrisLepko.GoEshop.ProductImage;
import com.github.ChrisLepko.GoEshop.dao.ProductCategoryDao;
import com.github.ChrisLepko.GoEshop.dao.ProductDao;
import com.github.ChrisLepko.GoEshop.model.Product;
import com.github.ChrisLepko.GoEshop.model.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;

@RestController
@CrossOrigin
@RequestMapping(path = "/create")
public class ProductController {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private ProductCategoryDao productCategoryDao;

    @PostMapping("/product")
    public Product uploadProduct(@Param("name") String name, @Param("sku") String sku, @Param("description") String description, @Param("unitPrice") BigDecimal unitPrice,
                                 @Param("unitsInStock") int unitsInStock, @Param("categoryId") Long categoryId, @RequestParam("newProduct") MultipartFile file) throws IOException {

        Product createdProduct = new Product(name, sku, description, unitPrice, unitsInStock, new ProductCategory(categoryId), file.getContentType(), file.getBytes());


        final Product savedProduct = productDao.save(createdProduct);

        System.out.println("Product saved");

        return savedProduct;
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id){
        productDao.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/category")
    public ProductCategory uploadCategory(@Param("id") Long id, @Param("categoryName") String categoryName){

        ProductCategory createdCategory = new ProductCategory(id, categoryName);

        final ProductCategory savedCategory = productCategoryDao.save(createdCategory);

        System.out.println("Category saved");

        return savedCategory;
    }
}
