package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.PatientDoctorList;
import com.example.Hospital.Management.Repository.PatientDoctorListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/ListPatientDoctor")
public class PatientDoctorListController {

    @Autowired
    private  PatientDoctorListRepo patientDoctorListRepo;
    @PostMapping("/AppointmentList")
    public PatientDoctorList MakeListOfPatientDoctor(
            @RequestParam("patientId") Integer PatientId,
            @RequestParam("patientName") String PatientName,
            @RequestParam("doctorId") Integer DoctorId,
            @RequestParam("doctorName") String DoctorName,
            @RequestParam("date") String Date)

    {

            PatientDoctorList pdl=new PatientDoctorList (PatientId,PatientName,DoctorId,DoctorName,Date);

           patientDoctorListRepo.save(pdl);
        return pdl;
    }

    @GetMapping("/getTotalAppointment/{id}/{date}")
    public int getTotalCountOfAppointment(@PathVariable("id") int id,@PathVariable("date") String date)
    {
        List<String> l=patientDoctorListRepo.getTotalAppointsByDateOfADoctor(id,date);
        return l.size();
    }

    @GetMapping("/allAppointmentOfPatient/{id}")
    public List<PatientDoctorList> getallApoointmentofAPtient(@PathVariable("id") int id)
    {
        return patientDoctorListRepo.findPatientByPatientId(id);
    }

    @GetMapping("/allPatientListOfToday/{doctorId}/{date}")
    public List<PatientDoctorList> allAppintment(@PathVariable("doctorId") int doctorId,@PathVariable("date") String date)
    {
        return patientDoctorListRepo.findAllPatientOfADoctorDayWise(doctorId,date);
    }

    @GetMapping("/Patient/{date}")
    public List<PatientDoctorList> AllPateint (@PathVariable("date") String date)
    {
        return patientDoctorListRepo.findByDate(date);
    }
}
