import React from "react";
import { Link, useLinkClickHandler, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import "../CSS Pages/PatientDoctorList.css"

function PatientDoctorList()
{  const { doctorId, patientId} = useParams();
   const[patientProfile,setPatientProfile]=useState("")
   const[doctorProfile,setDoctorProfile]=useState("")
   let [imageUrl, setImageUrl] = useState("");
   let[temp,setTemp]=useState(0);
   let[TotalAppointmentOf1Day,setTotalAppointmentOf1Day]=useState(0)

   var date=new Date();
   var formattedDate = date.toDateString();
   console.log(date)
   //console.log(typeof(formattedDate))
   
   var dateAsString=date.toLocaleDateString()
  
   //console.log(typeof(s))
   
   
   console.log(dateAsString)

    function ch()
    {
     alert("Confirm")
       temp++;
      
       setTemp(temp);
       
      // console.log(temp)
   
    const formData = new FormData();
        formData.append('patientId',patientProfile.id)
        formData.append('patientName',patientProfile.patientName)
        formData.append('doctorId',doctorProfile.id)
        formData.append('doctorName',doctorProfile.name)
        formData.append('date',formattedDate)

        
        fetch('http://localhost:8050/ListPatientDoctor/AppointmentList', {
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

    useState( ()=>{
   
        const fetchData = async ()  =>{
        
            try {
               console.log("pahle" +dateAsString)
                const response = await fetch(`http://localhost:8050/patient/Login/${patientId}`);
                const response1 = await fetch(`http://localhost:8050/doctor/Login/${doctorId}`);
                const response2 = await fetch(`http://localhost:8050/doctor/downloadImage/${doctorId}`);
                const response3 = await fetch(`http://localhost:8050/ListPatientDoctor/getTotalAppointment/${doctorId}/${formattedDate}`);
               // const response3 = await fetch(`http://localhost:8050/doctor/Login/${doctorId}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
            
                  const data = await response.json();
                  const data1 = await response1.json();
                  const imageBlob = await response2.blob();
                  const data3=await response3.json();
                  console.log( data3);
                  const imageObjectUrl = URL.createObjectURL(imageBlob);
                  console.log(data)
                  console.log(data1)
                  console.log(imageObjectUrl)

                  setPatientProfile(data)
                  setDoctorProfile(data1);
                  setTotalAppointmentOf1Day(data3)
                  setImageUrl(imageObjectUrl);
                } catch (error) {
                    console.error('Error fetching data: ', error.message);
                  }
          

        }

        if(patientId && doctorId && dateAsString )
        {
            fetchData();
        }

    },[patientId]
        
    )
   



    return(
     <div>
 


     <div className="appointment-page">
  <h1 id="ap1">AppointMent Page</h1>
  
<span className=".profile-container">
  {imageUrl && (
    <img
      src={imageUrl}
      alt="Doctor"
      className="profile-image"
    />
  )}
  <h2> {doctorProfile.name}</h2>
  </span>

 
 

  <span className="details-container">
  <p><b>{doctorProfile.specializarion}</b></p>
    <p><b>{doctorProfile.degree}</b></p>
    <p><b>{doctorProfile.institueName}</b></p>
    <p><b>Age: </b>{doctorProfile.age}</p>
    <p><b>Gender: </b>{doctorProfile.address}</p>
    <p><b>Address: </b>{doctorProfile.gender}</p>
    <p><b>Email: </b>{doctorProfile.email}</p>
    <p><b>Charges: </b>{doctorProfile.fee}</p>
    <p><b>Today's Total AppointMent :</b>{TotalAppointmentOf1Day}</p>
    
  </span>
</div>


<div>


</div>
      <button id="bt1" onClick={ch}>Book My Appointment</button>

     </div>



     
    );
}
export  default PatientDoctorList