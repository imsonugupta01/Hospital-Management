package com.example.Hospital.Management.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
public class DoctorToPatientConnection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int DoctorId;
    private int PatientId;
    private String Date;
    private String MeetingLink;


    public DoctorToPatientConnection(int doctorId, int patientId, String date, String meetingLink) {
        this.id = id;
        DoctorId = doctorId;
        PatientId = patientId;
        Date = date;
        MeetingLink = meetingLink;

    }

    public DoctorToPatientConnection()
    {

    }
}
