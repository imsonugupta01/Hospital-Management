package com.example.Hospital.Management.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
public class MedicinePresciption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int DoctorId;
    private int PatientId;
    private String Date;
    private String Medicines;

    public MedicinePresciption(int doctorId, int patientId, String date, String medicines) {

        DoctorId = doctorId;
        PatientId = patientId;
        Date = date;
        Medicines = medicines;
    }
}
