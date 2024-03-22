
import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import "../CSS Pages/PatientProfile.css"

function PatientProfile() {
  let { temp } = useParams();
  console.log(temp);
  let [id, setId] = useState();
  let [patientProfile, setPatientProfile] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let[appointmentList,setAppointmentList]=useState("")

  var date=new Date();
  let formattedDate = date.toDateString();
  

  

  function input1(event) {
    setId(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch(`http://localhost:8050/patient/Login/${id}`);
        const response2 = await fetch(`http://localhost:8050/patient/downloadImage/${id}`);
        const response3=await fetch(`http://localhost:8050/ListPatientDoctor/allAppointmentOfPatient/${id}`);
        
         



        if (!response.ok ) {
          throw new Error('Network response was not ok');
        }
       


        const data = await response.json();

        const imageBlob = await response2.blob();
        const data3 = await response3.json();
        const imageObjectUrl = URL.createObjectURL(imageBlob);

    

        
        

       

        console.log(data);
        console.log(data3);

        


        console.log(imageBlob);
        console.log(imageObjectUrl)
        setPatientProfile(data);
        setImageUrl(imageObjectUrl);
        setAppointmentList(data3);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    id = temp;

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
   < div  id="patientProfileContainer">
      <h1 id="hh">Profile</h1>

      

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Patient"
          className="profileImage"
        />
      )}
      <h1>{patientProfile.patientName}</h1>
      {/* <p>{patientProfile.username}</p> */}
      {/*<p>{patientProfile.id}</p>
      <div>
        <p><b>Age : </b>{patientProfile.age}</p>
        <p><b>Address : </b>{patientProfile.address}</p>
        <p><b>Contact : </b>{patientProfile.contactNumber}</p>
        <p><b>Gender : </b>{patientProfile.gender}</p>
      </div>
      */}

      <h1 id="hs" >My Recent CheckUps</h1>
      <div className="appoint-div">
     
      
        {appointmentList && appointmentList .slice() .reverse() .map (appointment =>(

          <span classname="s1">
          <Link id="ll" to={`/PatientmeetingRoom/${appointment.patientId}/${appointment.doctorId}/${appointment.checkUPDate}`}>
            <h4>Date : {appointment.checkUPDate}</h4>
            <h4>Doctor :  {appointment.doctorName}</h4>
          {/*  <p><b><button ><Link to={`/PatientmeetingRoom/${appointment.patientId}/${appointment.doctorId}/${appointment.checkUPDate}`}>MeetingLink</Link></button></b></p>*/}
          </Link>
          </span>

        )  )}
        
      </div>

      <button id="btn"><Link id="l1"to ={`/PatientDoctor/${patientProfile.id}`}>Get New Treatment</Link></button>

</div>

   
  );
}

export default PatientProfile;
