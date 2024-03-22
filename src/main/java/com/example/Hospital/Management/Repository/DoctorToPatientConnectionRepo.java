package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.DoctorToPatientConnection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorToPatientConnectionRepo extends CrudRepository<DoctorToPatientConnection,Integer> {
    @Query("select m from DoctorToPatientConnection m where m.Date=:date AND m.PatientId=:patientId AND m.DoctorId=:doctorId")
    DoctorToPatientConnection findmeetiingLink(@Param("date") String date, @Param("patientId") int patientId,@Param("doctorId") int doctorId);
}
