import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS Pages/AdminProfile.css"
import ConnectWithDoctors from "./ConnectWithDoctor";
function AdminProfile()
{   let {id}=useParams(); 
    console.log(id);

    let[prfileDetail,setProfileDetail]=useState("");
    let[imageURL,setImageUrl]=useState("")




    useEffect( ()=>{
         
        const fetchData = async () => {
        
            try {
                const response = await fetch(`http://localhost:8050/admin/Profile/${id}`);
                const response2 = await fetch(`http://localhost:8050/admin/downloadImage/${id}`);
                
                if (!response.ok) {
                  throw new Error('Network response was not okk');
                }
        
                const data = await response.json();
                const imageBlob = await response2.blob();
               
                const imageObjectUrl = URL.createObjectURL(imageBlob);
        
                console.log(data);
                setProfileDetail(data)
                setImageUrl(imageObjectUrl);
                console.log(imageBlob);


               
                
              } 
              catch (error) {
                console.error('Error fetching data: ', error.message);
              }


              
        }  ;
        if(id)
        {
            fetchData();
        }        
         
         
        },[id]
    )
    return(
        <div id="prof">
          <h1 id="hh">Admin Profile </h1>
          <div id="idiv">
          
          <img id="imgg" src={imageURL}></img>
          <h2>{prfileDetail.name}</h2>
          <p id="pp1">{prfileDetail.designation}</p>

          </div>


          <Link to="/allPatient"> <span id="ss1">
          <h2> Today's All Patient</h2>
          </span></Link>

        <Link to="/DocWisePatient">
          <span id="ss1">
          <h2> All Doctors</h2>
          </span></Link>

        <Link to="/DoctorAttendanceCheck">
          <span id="ss1">
          <h2>Check Attendence</h2>
          </span></Link>

         <Link to={`/AddDoctor/${id}`}>
          <span id="ss1">
          <h2>Add New Doctor</h2>
          </span></Link>

         <Link to="/deleteDoctor">
          <span id="ss1">
          <h2>Remove Doctor</h2>
          </span></Link>


         
          <Link to ="/connectwithDoc"><span id="ss1"> <h2>Connnect With Doctors</h2>
          
          </span></Link>

          

         
          

          

          


          


        </div>
    );
}
export default AdminProfile;