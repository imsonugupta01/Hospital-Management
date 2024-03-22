package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.DoctorAttendence;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorAttendenceRepo extends CrudRepository<DoctorAttendence,Integer> {
    @Query("select m from DoctorAttendence m where m.DoctorId=:doctorId AND m.DateWithDay=:date")
    List<DoctorAttendence> checkAttandence (@Param("doctorId") Integer doctorId, @Param("date") String date);

}
