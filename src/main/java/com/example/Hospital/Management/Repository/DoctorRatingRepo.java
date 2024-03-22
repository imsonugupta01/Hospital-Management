package com.example.Hospital.Management.Repository;

import com.example.Hospital.Management.Module.DoctorRating;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRatingRepo extends CrudRepository<DoctorRating,Integer> {
}
