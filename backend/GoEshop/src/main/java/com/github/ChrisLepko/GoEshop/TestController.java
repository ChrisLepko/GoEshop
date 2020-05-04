package com.github.ChrisLepko.GoEshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "/check")
public class TestController {

    @Autowired
    ProductImageRepository productImageRepository;

    @PostMapping("/upload")
        public ProductImage uploadImage(@RequestParam("myFile") MultipartFile file) throws IOException {
            ProductImage img = new ProductImage(file.getOriginalFilename(), file.getContentType(), file.getBytes());

            final ProductImage savedImage = productImageRepository.save(img);

            System.out.println("Image saved");

            return savedImage;
    }

    @GetMapping(path = "/get/{id}")
    public ProductImage getImage(@PathVariable("id") Long id) throws IOException{
        final Optional<ProductImage> retrievedImage = productImageRepository.findById(id);
        return retrievedImage.get();
    }
}

