import React, { useEffect, useState } from "react";
import "../CSS Pages/DoctorAttendeceCheck.css"
function DoctorAttendenceCheck()
{   
    var date= new Date();
    var formattedDate=date.toDateString();

    let[doctors,setDoctors]=useState("");
    let[attendanceStatus,setAttendanceStatus]=useState("");
   

    useEffect( ()=>{
        const fetchData = async ()=>{
             
            try {
               const response = await fetch(`http://localhost:8050/doctor/alldoc`);

               if(!response.ok)
               {
                throw new Error("Network Response Was Not Ok");
               }
               const data= await response.json();
               console.log(data);
               setDoctors(data);



                
            } catch (error) {
                console.error('Error fetching data: ', error.message);
            }
        }
        fetchData();
    },[formattedDate]
    )


   const checkAttendance = async (doctorId,formattedDate) => {
        
        try {
          const response = await fetch(`http://localhost:8050/attendece/check/${doctorId}/${formattedDate}`);
    
          if (!response.ok) {
            throw new Error("Network Response Was Not Ok");
          }
          const data= await response.json();
          console.log(data);
        if(data===0)
        {
         setAttendanceStatus("Present")   

        }
        if(data===1){
             setAttendanceStatus("Absent")
        }
        alert(attendanceStatus)


        } catch (error) {
          console.error('Error fetching attendance data: ', error.message);
        }
      };



     /* useEffect( ()=>{
          const fetchData = async ()=>{
            try {
              const response= await fetch(`http://localhost:8050/attendece/check/${dId}/${formattedDate}`)
                if(!response.ok)
                {
                    throw new Error("Network Response was not Ok");

                }
                const data=response.json();
                console.log(data);
                setAttendanceStatus(data);
                

            } catch (error) {
                console.error("error in fetching data",error.message)
                
            }
          }

          fetchData();
      },[dId]
      )*/

    
return (
    <div id="doc-attendece">
      <h1 id="hh">Attendance Sheet Of Doctors</h1>
      <div id="doc-list">
      <table >
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Attendance Status</th>
          </tr>
        </thead>

        <tbody>
           
           
           
           {/* {doctors && doctors.map( (doctor) => {
           // setdId(doctor.id)
             //checkAttendance(doctor.id,formattedDate); // Trigger API call for each doctor
              return (
                <tr key={doctor.id}>
                  <td >{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specializarion}</td>
                  <td>{attendanceStatus}</td>
                </tr>
              );
            })}  */}

            {doctors && doctors.map( (doctor) => {
           
              return (
                <tr key={doctor.id}>
                  <td >{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specializarion}</td>
                  <td><button  onClick={ () => checkAttendance(doctor.id,formattedDate)}>Check Attendance</button></td>
                  
                </tr>
              );
            })} 



           
            


        </tbody>
      </table>
      </div>
    </div>
  );
}
export default DoctorAttendenceCheck;


