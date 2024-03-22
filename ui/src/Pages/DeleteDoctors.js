import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS Pages/DeleteDoctor.css"
function DeleteDoctor()
{  

    let {adminId}=useParams();

    let[doctors,setDoctors]=useState("");
   // let[number,setNumber]=useState(0);
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
    
    const dlt = async (doctorId) => {
        try {
            const response = await fetch(`http://localhost:8050/doctor/delete/${doctorId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                   
                },
               
            });
    
            if (response.ok) {
                console.log(`Doctor with ID ${doctorId} deleted successfully.`);
                
            } else {
                console.error(`Failed to delete doctor with ID ${doctorId}.`);
                
            }
        } catch (error) {
            console.error('An error occurred during the delete request:', error);
           
        }
    };
    
    return(
       <div id="del-doctor">

<h1 id="hh"> Doctors</h1>
       <div >
        {
            doctors && doctors.map(
                doctor =>(
                  <span id="ss1" >
                  <h3>{doctor.name}</h3>
                  <h5>{doctor.specializarion}</h5>
                  <button id="xxx" onClick={() => dlt(doctor.id)}>Remove</button>
                  </span>
                 
                )
            )
        }
       </div>

       </div>
    );

}
export default DeleteDoctor;