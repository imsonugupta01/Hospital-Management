package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.Doctor;
import com.example.Hospital.Management.Module.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepo extends CrudRepository<Doctor,Integer> {
    @Query("select m.PatentImageName from Doctor m where m.id=:id")
    String getFileName(@Param("id") int id);

    @Query("select m from Doctor m where m.PatentImageName=:filename")
    Optional<Doctor> findByDoctorImageName(@Param("filename") String filename);

    @Query("select m.id from Doctor m where m.Username=:username AND m.Password=:password")
    Integer findDoctorId(@Param("username") String username,@Param("password") String password);

    @Query("select m from Doctor m where m.Specializarion=:speciality")
    List<Doctor> getDoctorBySpeciality(@Param("speciality") String speciality);

    @Query("select m.PatentImageName from Doctor m where m.Specializarion=:specialiity")
    List<String> getFilesNameBySpeciality(@Param("specialiity") String speciality);
}

