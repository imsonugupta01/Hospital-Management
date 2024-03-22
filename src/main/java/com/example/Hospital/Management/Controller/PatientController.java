
package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.Patient;
import com.example.Hospital.Management.Module.ProductImage;
import com.example.Hospital.Management.Repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientRepo patientRepo;


//    private  final String PATH="D:\\SpringbootProject\\MySQLImages\\";
    private final String PATH = System.getProperty("user.dir") + "\\Images\\Patient\\";

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/uploadPatient", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> registerPatient(
            @RequestParam("patientName") String patientName,
            @RequestParam("age") String age,
            @RequestParam("address") String address,
            @RequestParam("contactNumber") String contactNumber,
            @RequestParam("gender") String gender,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestPart("patientImage") MultipartFile file) throws IOException {

        // Save the file to the specified path
        String fullPath = PATH + file.getOriginalFilename();
        file.transferTo(new File(fullPath));

        String patientImageName = file.getOriginalFilename();
        String imageType = file.getContentType();
        String imagePath = fullPath;

        Patient patient = new Patient(patientName, Integer.parseInt(age), address, contactNumber, gender, patientImageName, imageType, imagePath,username,password);
        patientRepo.save(patient);

        return ResponseEntity.ok("Upload successful");
    }

    @GetMapping("/Login/{id}")
    public Optional<Patient> patientLogin(@PathVariable("id") int id)
    {
        Optional<Patient> RE=patientRepo.findById(id);
        return RE;
    }



    @GetMapping("/downloadImage/{id}")
    public ResponseEntity<byte[]> patientImage(@PathVariable("id") int id) throws IOException {
        String fileName=patientRepo.getFileName(id);
        System.out.println(fileName);
        Optional<Patient> imageObject=patientRepo.findByPatentImageName(fileName);
        String fullPath = imageObject.get().getImagePath();
        byte[] image=Files.readAllBytes(new File(fullPath).toPath());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
        //return fileName;
    }

    @GetMapping("/getPatientId/{username}/{password}")
    public int getPatientID(@PathVariable("username") String username,@PathVariable("password") String password)
    {
        return patientRepo.findPatientId(username,password);
    }







}




















/*
//isse postman ke through data jaega
package com.example.Hospital.Management.Controller;
//package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.Patient;
import com.example.Hospital.Management.Repository.PatientRepo;
import com.example.Hospital.Management.Service.CorsConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
//@CrossOrigin(origins = "http://localhost:3001")

//@CrossOrigin
@RestController
@RequestMapping("/all")
@CrossOrigin(origins = "http://localhost:3001")
public class PatientController {

    @Autowired
    private PatientRepo patientRepo;

    private final String PATH = "D:\\ARTI\\"; // Update this to your desired file storage path

    @ResponseStatus(value = HttpStatus.OK)
    //@PostMapping("/uploadPatient")
    @PostMapping(value = "/uploadPatient", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> registerPatient(
            @RequestPart("patientInfo") Patient patient,
            @RequestPart("patientImage") MultipartFile file) throws IOException {

        String patientName = patient.getPatientName();
        int age = patient.getAge();
        String address = patient.getAddress();
        String contactNumber = patient.getContactNumber();
        String gender = patient.getGender();

        // Save the file to the specified path
        String fullPath = PATH + file.getOriginalFilename();
        file.transferTo(new File(fullPath));

        String patientImageName = file.getOriginalFilename();
        String imageType = file.getContentType();
        String imagePath = fullPath;

        Patient patient1 = new Patient(patientName, age, address, contactNumber, gender, patientImageName, imageType, imagePath);
        patientRepo.save(patient1);

        return ResponseEntity.ok("Upload successful");
    }
}*/










