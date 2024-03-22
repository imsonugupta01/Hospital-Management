package com.example.Hospital.Management.Module;

import jakarta.persistence.*;
import lombok.*;

@ToString
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    private String PatientName;

    private Integer Age;
    private String Address;
    private String ContactNumber;
    private String Gender;
    private String PatentImageName;
    private String ImageType;
    @Column(unique = true)
    private String ImagePath;
    private String Username;
    private String Password;
    //private MultipartFile file;


    /*public Patient(String patientName, int age, String address, String contactNumber, String gender, String patentImageName, String imageType, String imagePath) {
        this.id = id;
        PatientName = patientName;
        Age = age;
        Address = address;
        ContactNumber = contactNumber;
        Gender = gender;
        PatentImageName = patentImageName;
        ImageType = imageType;
        ImagePath = imagePath;
    }*/

    public Patient( String patientName, Integer age, String address, String contactNumber, String gender, String patentImageName, String imageType, String imagePath, String username, String password) {
        this.id = id;
        PatientName = patientName;
        Age = age;
        Address = address;
        ContactNumber = contactNumber;
        Gender = gender;
        PatentImageName = patentImageName;
        ImageType = imageType;
        ImagePath = imagePath;
        Username = username;
        Password = password;
    }
}
