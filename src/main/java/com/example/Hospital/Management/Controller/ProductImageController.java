package com.example.Hospital.Management.Controller;

import java.io.File;
import java.io.IOException;

import com.example.Hospital.Management.Module.ProductImage;
import com.example.Hospital.Management.Repository.ProductImageRepository;
import com.example.Hospital.Management.Service.ProductImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;
    @Autowired
    private ProductImageRepository imageRepo;
    private final String PATH = "D:\\ARTI\\";
    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping("/upload")
    public ProductImage uploadImage(@RequestParam("productImage")MultipartFile file) throws IOException{
      //  String s=file.toString();
       // System.out.println(s);
       // System.out.println(file);
        String fullPath = PATH+file.getOriginalFilename();
        ProductImage pImage = new ProductImage();
        pImage.setName(file.getOriginalFilename());
        pImage.setType(file.getContentType());
        pImage.setImagePath(fullPath);

        file.transferTo(new File(fullPath));
        return imageRepo.save(pImage);
        //productImageService.uploadImage(file);
    }



    @GetMapping("/download/{fileName}")
    public ResponseEntity<byte[]> downloadImage(@PathVariable String fileName) throws IOException {
        byte[] image = productImageService.downloadImage(fileName);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
    }
}