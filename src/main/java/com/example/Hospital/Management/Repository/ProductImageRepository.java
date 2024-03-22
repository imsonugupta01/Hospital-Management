package com.example.Hospital.Management.Repository;
import java.util.Optional;

import com.example.Hospital.Management.Module.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductImageRepository extends CrudRepository<ProductImage, Long> {

    Optional<ProductImage> findByName(String fileName);
}