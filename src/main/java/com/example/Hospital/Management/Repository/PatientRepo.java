package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.Patient;
import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PatientRepo extends CrudRepository<Patient,Integer> {

    @Query("select m.PatentImageName from Patient m where m.id=:id")
    String getFileName(@Param("id") int id);

    @Query("select m from Patient m where m.PatentImageName=:filename")
    Optional<Patient> findByPatentImageName(@Param("filename") String filename);


    @Query("select m.id from Patient m where m.Username=:username AND m.Password=:password")
    Integer findPatientId(@Param("username") String username,@Param("password") String password);

}
