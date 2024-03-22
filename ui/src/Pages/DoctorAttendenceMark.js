import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS Pages/DoctorAttendencePAge.css"
function DoctorAttendenceMark()
{ 
    var date=new Date();
   var formattedDate = date.toDateString();
   var Datee=date.toLocaleDateString();
   var Time=date.toLocaleTimeString();
   //console.log(formattedDate);
   //console.log(Date);
   console.log(formattedDate);  
   console.log(Datee);
   console.log(Time);

    let[doctors,setDoctors]=useState("")
    useEffect(  ()=>{
        const fetchData = async ()=>{
            try{

              const response = await fetch (`http://localhost:8050/doctor/alldoc`);
              if(!response.ok)
              {
                throw new Error("Newtork Response Was Not OK");
              }

              const data=await response.json();
              console.log(data);
              setDoctors(data);
            }
            catch(error){
                console.error('Error fetching data: ', error.message);
            }

        }
        fetchData();
    },[]


    )

    const markAttendance = async (doctorId) => {

        const formData=new FormData();
        formData.append('doctorId',doctorId)        ;
        formData.append('date',Datee);
        formData.append('Time',Time)
        formData.append('DateWithDay',formattedDate);
        console.log(formData);

        console.log(`Marking attendance for doctor with ID ${doctorId}`);


        try {

        const response= await fetch(`http://localhost:8050/attendece/check/${doctorId}/${formattedDate}`)

        if(!response.ok)
        {
            throw new Error("Network Response Was Not Ok");
        
        }
        const data=await response.json();
        //console.log(response);
        console.log(data);
        
        if(data)
        {
           
            fetch('http://localhost:8050/attendece/MarkAttendence', {
            method: 'POST',
            body: formData,
          })
            .then(response => response.text())
            .then(data => {
              console.log('SignUp successful:', data);
            })
            .catch(error => {
              console.error('Error during SignUp:', error);
            });
        }
        else{
            alert("Already Marked")
        }

            
        } 
        catch (error) {
            console.error('Error fetching data: ', error.message);
        }
        

        
       
      };


    return(
        <div>
        <h2 id="hh">Attendence Page <br></br> {formattedDate}</h2>
        <table>
        <tr>
            <th>Doctor Number</th>
            <th>Doctor's Name</th>
            <th>specialization</th>
            
            
        </tr>
        {   
            doctors && doctors.map( doctor =>(
                
               
               <tr>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specializarion}</td>
                <td><button  id="bbbbt1" onClick={() => markAttendance(doctor.id)}>Mark Present</button></td>
               </tr>
            ))
        }
        </table>
          
        </div>
    );
}
export default DoctorAttendenceMark;