package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.Admin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends CrudRepository<Admin,Integer> {


    @Query("select m.AdminImageName from Admin m where m.id=:id")
    String getFileName(@Param("id") int id);

    @Query("select m from Admin m where m.AdminImageName=:filename")
    Optional<Admin> findByAdminImageName(@Param("filename") String filename);

    @Query("select m.id from Admin m where m.Username=:username AND m.Password=:password")
    Integer findAdminId(@Param("username") String username,@Param("password") String password);


}
