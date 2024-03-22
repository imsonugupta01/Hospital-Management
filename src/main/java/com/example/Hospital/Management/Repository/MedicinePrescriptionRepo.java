package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.MedicinePresciption;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MedicinePrescriptionRepo extends CrudRepository<MedicinePresciption,Integer> {
@Query("select m from MedicinePresciption  m where m.Date=:date AND m.PatientId=:patientId AND m.DoctorId=:doctorId")
 MedicinePresciption getDeatils(@Param("date") String date,@Param("patientId") Integer patientId,@Param("doctorId") Integer docotrId);
}
