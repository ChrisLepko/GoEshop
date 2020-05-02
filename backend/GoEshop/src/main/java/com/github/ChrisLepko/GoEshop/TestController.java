package com.github.ChrisLepko.GoEshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "/check")
public class TestController {

    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/upload")
        public ImageModel uploadImage(@RequestParam("myFile") MultipartFile file) throws IOException {
            ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(), file.getBytes());

            final ImageModel savedImage = imageRepository.save(img);

            System.out.println("Image saved");

            return savedImage;
    }

    @GetMapping(path = "/get/{id}")
    public ImageModel getImage(@PathVariable("id") Long id) throws IOException{
        final Optional<ImageModel> retrievedImage = imageRepository.findById(id);
        return retrievedImage.get();
    }
}

