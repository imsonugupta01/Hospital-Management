package com.example.Hospital.Management.Module;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Name;
    private String Designation;
    private String Gender;
    private String DOB;
    private int Age;
    private String Address;
    private String Email;
    private String ContactNumber;
    private String AdminImageName;
    private String ImagePath;
    private String ImageType;
    @Column(unique = true)
    private String Username;
    private String Password;

    public Admin( String name, String designation, String gender, String DOB, int age, String address, String email, String contactNumber, String adminImageName, String imagePath, String imageType, String username, String password) {

        Name = name;
        Designation = designation;
        Gender = gender;
        this.DOB = DOB;
        Age = age;
        Address = address;
        Email = email;
        ContactNumber = contactNumber;
        AdminImageName = adminImageName;
        ImagePath = imagePath;
        ImageType = imageType;
        Username = username;
        Password = password;
    }
}
