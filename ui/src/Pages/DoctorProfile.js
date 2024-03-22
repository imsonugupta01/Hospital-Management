
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS Pages/DoctorProfile.css"

function DoctorProfile() {
  let { temp } = useParams();
  console.log(temp);
  let [id, setId] = useState();
  let [doctorProfile, setDoctorProfile] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let[todaysAppointment,setTodaysAppointment]=useState("")

  var date=new Date();
 let formattedDate = date.toDateString();
  function input1(event) {
    setId(event.target.value);
    console.log(event.target.value);
  }

  useEffect(  () => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8050/doctor/Login/${id}`);
        const response2 = await fetch(`http://localhost:8050/doctor/downloadImage/${id}`);
        const response3=await fetch(`http://localhost:8050/ListPatientDoctor/allPatientListOfToday/${temp}/${formattedDate}`)

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const imageBlob = await response2.blob();
        const data3= await response3.json();
        const imageObjectUrl = URL.createObjectURL(imageBlob);

        console.log(data);
        console.log(imageBlob);
        console.log(data3)
        setDoctorProfile(data);
        setImageUrl(imageObjectUrl);
        setTodaysAppointment(data3);
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
    <div id="doctorProfileContainer">
      <h1 id="hh">Profile</h1>
     

     {/*<input value={id} onChange={input1}/>*/}
      

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Doctor"
          className="profileImage"
        />
      )}
      <h1>{doctorProfile.name}</h1>
      <p>{doctorProfile.username}</p>
      <div>
      <p><b>{doctorProfile.degree}  </b></p>
        <p><b>Age : </b>{doctorProfile.age}</p>
        
        <p><b>Contact : </b>{doctorProfile.contactNumber}</p>
        <p><b>Gender : </b>{doctorProfile.address}</p>
        <p><b>Address : </b>{doctorProfile.gender}</p>
      </div>
      <br></br><br></br>


      <button><Link to="/DoctorAttendence">Mark Attendence</Link></button>


<div id="d1"></div>
<h2>Today's Patient</h2>

      <div className="appoint-div">
        {todaysAppointment && todaysAppointment 
      .map (appointment =>(

          <span classname="s1">
            <p><b>Date : </b>{appointment.checkUPDate}</p>
            <p><b>Patient Name : </b> {appointment.patientName}</p>
            <p id="p1"><Link id="l2" to={`/CheckUpPage/${temp}/${appointment.patientId}/${formattedDate}`}><b> {`Start CheckUp =>`}  </b></Link></p>
          </span>

        )  )}
      </div>
    </div>
  );
}

export default DoctorProfile;
