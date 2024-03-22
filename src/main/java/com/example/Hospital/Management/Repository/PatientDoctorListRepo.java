package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.PatientDoctorList;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientDoctorListRepo extends CrudRepository<PatientDoctorList,Integer> {
    @Query("select m.PatientName from PatientDoctorList m where m.DoctorId=:id AND m.CheckUPDate=:date")
    List<String> getTotalAppointsByDateOfADoctor(@Param("id") int id,@Param("date") String date);
    @Query("select m from PatientDoctorList m where m.PatientId=:id")
    List<PatientDoctorList> findPatientByPatientId(@Param("id") int id);
  @Query("select m from PatientDoctorList m where m.DoctorId=:doctorId AND m.CheckUPDate=:date")
    List<PatientDoctorList> findAllPatientOfADoctorDayWise(@Param("doctorId") int doctoId,@Param("date") String date);

  @Query("select m from PatientDoctorList m where m.CheckUPDate=:date")
  List<PatientDoctorList> findByDate(@Param("date") String date);
}


