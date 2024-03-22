package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.Doctor;
import com.example.Hospital.Management.Module.Patient;
import com.example.Hospital.Management.Repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    private DoctorRepo doctorRepo;

    private  final String PATH="D:\\SpringbootProject\\MySQLImages\\Doctor\\";
    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/uploadDoctor", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> registerDoctor(
            @RequestParam("name") String DoctorName,
            @RequestParam("specialization") String Specialization,
            @RequestParam("address") String address,
            @RequestParam("age") String Age,
            @RequestParam("gender") String gender,
            @RequestParam("degree") String Degree,
            @RequestParam("contactNumber") String contactNumber,
            @RequestParam("email") String Email,
            @RequestParam("instituteName") String InstituteName,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("fee") Integer fee,
            @RequestPart("doctorImage") MultipartFile file) throws IOException {

        String fullPath = PATH + file.getOriginalFilename();
        file.transferTo(new File(fullPath));

        String doctorImageName = file.getOriginalFilename();
        String imageType = file.getContentType();
        String imagePath = fullPath;

        Doctor doctor=new Doctor(DoctorName,Specialization,Degree,InstituteName,contactNumber,Age,gender,Email,address,doctorImageName,imageType,imagePath,username,password,fee  );

        doctorRepo.save(doctor);


        return ResponseEntity.ok("Upload successful");
    }


    @GetMapping("/Login/{id}")
    public Optional<Doctor> patientLogin(@PathVariable("id") int id)
    {
        Optional<Doctor> RE=doctorRepo.findById(id);
        return RE;
    }

    @GetMapping("/downloadImage/{id}")
    public ResponseEntity<byte[]> patientImage(@PathVariable("id") int id) throws IOException {
        String fileName=doctorRepo.getFileName(id);
        System.out.println(fileName);
        Optional<Doctor> imageObject=doctorRepo.findByDoctorImageName(fileName);
        String fullPath = imageObject.get().getImagePath();
        byte[] image= Files.readAllBytes(new File(fullPath).toPath());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
        //return fileName;
    }

    @GetMapping("/getDoctorId/{username}/{password}")
    public int getDoctorID(@PathVariable("username") String username,@PathVariable("password") String password)
    {
        return doctorRepo.findDoctorId(username,password);
    }

    @GetMapping("/getDoctor/{speciality}")
    public List<Doctor> getDoctor(@PathVariable("speciality") String speciality)
    {
         return doctorRepo.getDoctorBySpeciality(speciality);
    }

    @GetMapping("/getFilesNames/{speciality}")
    public List<String> getdoctorimages(@PathVariable("speciality") String speciality)
    {
       return  doctorRepo.getFilesNameBySpeciality(speciality);
    }

    @GetMapping("/getFilesName/{speciality}")
    public List<ResponseEntity<byte[]>> getdoctorimage(@PathVariable("speciality") String speciality) throws IOException {
        List<String> l =doctorRepo.getFilesNameBySpeciality(speciality);
        List<ResponseEntity<byte[]>> RE_List =new ArrayList<>();
        for(int i=0;i<l.size();i++)
        {   String fileName=l.get(i);
            Optional<Doctor> imageObject=doctorRepo.findByDoctorImageName(fileName);
            String fullPath = imageObject.get().getImagePath();
            byte[] image= Files.readAllBytes(new File(fullPath).toPath());
          ResponseEntity<byte[]> RE=  ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
          RE_List.add(RE);

        }
        return RE_List;

    }
    @GetMapping("/alldoc")
    public List<Doctor> alldoctors(){
        return (List<Doctor>) doctorRepo.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDoctor (@PathVariable("id") Integer id)
    {
        doctorRepo.deleteById(id);
    }



}

