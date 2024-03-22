package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.MedicinePresciption;
import com.example.Hospital.Management.Repository.MedicinePrescriptionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/medicine")
public class MedicinePrescriptionController {

    @Autowired
    private MedicinePrescriptionRepo medicinePrescriptionRepo;

    @PostMapping("/save")
    public MedicinePresciption savePrescription(
            @RequestParam("doctorId") int doctorid,
            @RequestParam("patientId") int patientid,
            @RequestParam("date") String date,
            @RequestParam("Medicine") String medicines)
    {
        MedicinePresciption MP=new MedicinePresciption(doctorid,patientid,date,medicines);
        medicinePrescriptionRepo.save(MP);
        return  MP;
    }

    @GetMapping("/getMedicines/{date}/{patientId}/{doctorId}")
    public MedicinePresciption getPrescription (@PathVariable("date")String date,@PathVariable("patientId") Integer patientId,@PathVariable("doctorId") Integer doctorId)
    {
       return medicinePrescriptionRepo.getDeatils(date, patientId, doctorId);
    }
}
