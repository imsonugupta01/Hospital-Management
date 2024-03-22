package com.example.Hospital.Management.Service;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

import com.example.Hospital.Management.Module.ProductImage;
import com.example.Hospital.Management.Repository.ProductImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ProductImageService {

    @Autowired
    private ProductImageRepository imageRepo;

    private final String PATH = "D:\\ARTI\\";

    public ProductImage uploadImage(MultipartFile file) throws IOException {
        String fullPath = PATH+file.getOriginalFilename();
        ProductImage pImage = new ProductImage();
        pImage.setName(file.getOriginalFilename());
        pImage.setType(file.getContentType());
        pImage.setImagePath(fullPath);

        file.transferTo(new File(fullPath));
        return imageRepo.save(pImage);
    }

    public byte[] downloadImage(String fileName) throws IOException{

        Optional<ProductImage> imageObject=imageRepo.findByName(fileName);
        String fullPath = imageObject.get().getImagePath();
        return Files.readAllBytes(new File(fullPath).toPath());
    }



   /* public byte[] downloadImage(String fileName) throws IOException {
        Optional<ProductImage> imageObject = imageRepo.findByName(fileName);

        if (imageObject.isPresent()) {
            String fullPath = imageObject.get().getImagePath().trim();  // Trim leading and trailing spaces
            return Files.readAllBytes(new File(fullPath).toPath());
        } else {
            throw new FileNotFoundException("Image not found with fileName: " + fileName);
        }
    }*/


}