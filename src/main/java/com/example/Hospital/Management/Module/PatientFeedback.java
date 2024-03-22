package com.example.Hospital.Management.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
public class PatientFeedback {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;

    private int PatientId;
    private int DoctorId;
    private Double Rating;
    private String Feedback;
    private String Date;
    private String Time;
    private String DateWithDay;

    public PatientFeedback(int patientId, int doctorId, Double rating, String feedback, String date, String time, String dateWithDay) {
        PatientId = patientId;
        DoctorId = doctorId;
        Rating = rating;
        Feedback = feedback;
        Date = date;
        Time = time;
        DateWithDay = dateWithDay;
    }
}
