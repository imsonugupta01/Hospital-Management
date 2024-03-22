package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.DoctorRating;
import com.example.Hospital.Management.Repository.DoctorRatingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/rating")
public class DoctorRatingController {

    @Autowired
    private DoctorRatingRepo doctorRatingRepo;

    @PostMapping("/save")
    public DoctorRating saverating (@RequestParam("doctorId") Integer doctorId,
                                              @RequestParam("patientId") Integer patientId,
                                              @RequestParam("docpatIdPair") String IdPair,
                                              @RequestParam("rate") Integer rate)


    {
        DoctorRating doctorRating=new DoctorRating(doctorId,patientId,IdPair,rate);
        doctorRatingRepo.save(doctorRating);
        return doctorRating;
    }

}
