package com.github.ChrisLepko.GoEshop;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {

}
