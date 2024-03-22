import React, { useEffect, useState } from "react";
import "../CSS Pages/Today'sPatient.css"
function TodaysPatient ()
{   
    var date=new Date();
   var formattedDate = date.toDateString();
   let[allPatient,setAllPatient]=useState("")

   useEffect( ()=>{

    const fetchData = async () => {

        try{

            const response= await fetch(`http://localhost:8050/ListPatientDoctor/Patient/${formattedDate}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data=await response.json();
              console.log(data);
              setAllPatient(data);

        }
        catch(error){

        }

    }
    if(formattedDate)
    {
        fetchData();
    }

   },[formattedDate]

 )
    return(
     <div>
     <h1 id="hhh1">All Patients {formattedDate}</h1>
     <div>
      {
        allPatient && allPatient
        .map( Patient => (
            <div>
            <div id="sss1">
               <h4>Patient : {Patient.patientName}</h4>
               <h4>Doctor : {Patient.doctorName}</h4>
               </div>
               <br></br>
            </div>
        ) )
      }

     </div>
    </div>
    );
}
export default TodaysPatient;