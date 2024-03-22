package com.example.Hospital.Management.Controller;

import com.example.Hospital.Management.Module.DoctorAttendence;
import com.example.Hospital.Management.Repository.DoctorAttendenceRepo;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/attendece")
public class doctorAttendenceConttroller {
    @Autowired
    private DoctorAttendenceRepo doctorAttendenceRepo;
    @PostMapping("/MarkAttendence")
    public DoctorAttendence markAttend(@RequestParam("doctorId") int doctorId,
                                       @RequestParam("date") String date,
                                       @RequestParam("Time") String time ,
                                       @RequestParam("DateWithDay") String datewithday)
    {
               DoctorAttendence doctorAttendence=new DoctorAttendence(doctorId,date,time,datewithday    );
               doctorAttendenceRepo.save(doctorAttendence);
               return doctorAttendence;

    }
    @GetMapping("/check/{doctorId}/{date}")
    public Integer checkAttandence (@PathVariable("doctorId") Integer doctorId,@PathVariable("date") String date)
    {
        List<DoctorAttendence> l= doctorAttendenceRepo.checkAttandence(doctorId, date);
        if(l.size()==0)
        {
            return 1;
        }
        return 0;

    }




}
