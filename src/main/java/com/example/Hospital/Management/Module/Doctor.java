package com.example.Hospital.Management.Module;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Setter
@Getter
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Name;
    private String Specializarion;
    private String Degree;
    private String InstitueName;
    private String ContactNumber;
    private String Age;
    private String Gender;
    private String Email;
    private String Address;
    private String PatentImageName;
    private String ImageType;
    @Column(unique = true)
    private String ImagePath;
    private int Fee;
    private String Username;
    private String Password;

    public Doctor(String name, String specialization, String degree, String instituteName, String contactNumber, String age, String gender, String email, String address, String patentImageName, String imageType, String imagePath ,String username,String password,int fee) {
        this.id = id;
        Name = name;
        Specializarion = specialization;
        Degree = degree;
        InstitueName = instituteName;
        ContactNumber = contactNumber;
        Age = age;
        Gender = gender;
        Email = email;
        Address = address;
        PatentImageName = patentImageName;
        ImageType = imageType;
        ImagePath = imagePath;
        Username = username;
        Password = password;
        Fee=fee;
    }

    public Doctor() {
    }
}
