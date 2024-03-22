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
@Getter
@Setter
@NoArgsConstructor
@ToString
public class DoctorAttendence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int DoctorId;
    private String Date;
    private String Time;
    private String DateWithDay;

    public DoctorAttendence(int doctorId, String date, String time, String dateWithDay) {
        DoctorId = doctorId;
        Date = date;
        Time = time;
        DateWithDay = dateWithDay;
    }
}
