package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.Admin;
import com.example.Hospital.Management.Module.Doctor;
import com.example.Hospital.Management.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminRepo adminRepo;
   // private  final String PATH="D:\\SpringbootProject\\MySQLImages\\";
   private  final String PATH="D:\\SpringbootProject\\MySQLImages\\Doctor\\";

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/uploadAdmin", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> registerPatient(
            @RequestParam("AdminName") String name,
            @RequestParam("Designation") String designation,
            @RequestParam("Gender") String gender,
            @RequestParam("DOB") String dob,
            @RequestParam("Age") Integer age,
            @RequestParam("Address")String address,
            @RequestParam("Email") String email,
            @RequestParam("ContactNumber") String contactNumber,
            @RequestParam("Username") String username,
            @RequestParam("Password") String password,
            @RequestPart("Image") MultipartFile file ) throws IOException {


        String fullPath = PATH + file.getOriginalFilename();
        file.transferTo(new File(fullPath));

        String AdminImageName = file.getOriginalFilename();
        String imageType = file.getContentType();
        String imagePath = fullPath;

        Admin admin=new Admin(name,designation,gender,dob,age,address,email,contactNumber,AdminImageName,imagePath,imageType,username,password);
        adminRepo.save(admin);

        return ResponseEntity.ok("Upload successful");
    }

    @GetMapping("/Profile/{id}")
    public Optional<Admin> profile(@PathVariable("id") Integer id)
    {
       // return adminRepo.findById(id);
        Optional<Admin> Ad= adminRepo.findById(id);
        return  Ad;
    }

    @GetMapping("/downloadImage/{id}")
    public ResponseEntity<byte[]> AdminImage(@PathVariable("id") int id) throws IOException {
        String fileName=adminRepo.getFileName(id);
        System.out.println(fileName);
        Optional<Admin> imageObject=adminRepo.findByAdminImageName(fileName);
        String fullPath = imageObject.get().getImagePath();
        byte[] image= Files.readAllBytes(new File(fullPath).toPath());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
        //return fileName;
    }

    @GetMapping("/getAdminId/{username}/{password}")
    public int getAdminID(@PathVariable("username") String username,@PathVariable("password") String password)
    {
        int id=adminRepo.findAdminId(username,password);
        return id;
    }



}
