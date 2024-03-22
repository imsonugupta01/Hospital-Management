package com.example.Hospital.Management.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
@Getter
@Setter
@Entity
@ToString

public class PatientDoctorList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String DoctorName;
    private String PatientName;
    private Integer DoctorId;
    private Integer PatientId;
    private String CheckUPDate;

    public PatientDoctorList(int patientId,String patientName,int doctorId ,String doctorName ,String date ) {
        this.id = id;
        DoctorName = doctorName;
        PatientName = patientName;
        DoctorId=doctorId;
        PatientId=patientId;
        CheckUPDate=date;

    }

    public PatientDoctorList() {
    }
}
