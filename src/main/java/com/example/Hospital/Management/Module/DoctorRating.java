package com.example.Hospital.Management.Module;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@ToString
@Setter
@Getter
@NoArgsConstructor
public class DoctorRating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int DoctorId;
    private int PatientId;

    @Column(unique = true)
    private String docPatId;
    private int Rate;

    public DoctorRating(int doctorId, int patientId, String docPatId, int rate) {
        DoctorId = doctorId;
        PatientId = patientId;
        this.docPatId = docPatId;
        Rate = rate;
    }
}
