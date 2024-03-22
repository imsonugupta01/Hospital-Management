import React, { useEffect, useState } from "react";
import "../CSS Pages/DoctorWisePatient.css"
function DocWisePatient(){

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
    return(
     <div id="doc-pat">
       <h1 id="hh"> Doctors</h1>
       <div>
        {
            doctors && doctors.map(
                doctor =>(
                  <div id="ss1">
                  <h3>{doctor.name}</h3>
                  <h5>{doctor.specializarion}</h5>
                  </div>
                )
            )
        }
       </div>
     </div>
    );
}
export default DocWisePatient;