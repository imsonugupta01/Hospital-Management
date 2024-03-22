package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.DoctorToPatientConnection;
import com.example.Hospital.Management.Repository.DoctorToPatientConnectionRepo;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/connection")
public class DoctorToPatientConnectionController {
    @Autowired
    private DoctorToPatientConnectionRepo doctorToPatientConnectionRepo;

    @PostMapping("/setMeetingLink")
    public DoctorToPatientConnection setmeeting(
                            @RequestParam("doctorId") int doctorid,
                            @RequestParam("patientId") int patientid,
                            @RequestParam("date") String date,
                            @RequestParam("meetingLink") String MeetingLink)
    {

        DoctorToPatientConnection DCP=new DoctorToPatientConnection(doctorid,patientid,date,MeetingLink);
        doctorToPatientConnectionRepo.save(DCP);
                return DCP;
    }
    @GetMapping("/getMeetingLink/{date}/{patientId}/{doctorId}")
    public DoctorToPatientConnection getmeeeting(@PathVariable("date") String date, @PathVariable("patientId") int patientId,@PathVariable("doctorId")int doctorId)
    {
        DoctorToPatientConnection DCP= doctorToPatientConnectionRepo.findmeetiingLink(date,patientId,doctorId);

        return DCP;
    }
}
