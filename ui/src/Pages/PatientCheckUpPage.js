import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CSS Pages/PatientCheckUpPages.css"
function PatientCheckUpPage()
{  let {patientId,doctorId,date}=useParams();
   let [meetingLink,setMeetingLink]=useState("")
   let[medicine,setMedicines]=useState("")
   let[rate,setRate]=useState("")
   let[docPatIdPair,setIdPair]=useState("")


   //console.log(patientId+ "  "+doctorId);
   var date2=new Date();
   let formattedDate = date2.toDateString();
   //console.log(formattedDate)

   

   useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch(`http://localhost:8050/connection/getMeetingLink/${formattedDate}/${patientId}/${doctorId}`);
        const response2 = await fetch(`http://localhost:8050/medicine/getMedicines/${formattedDate}/${patientId}/${doctorId}`);

        if (!response.ok ) {
          throw new Error('Network response was not ok');
        }
       
      

        const data = await response.json()
        const data2 = await response2.json()



        console.log(data);
        console.log(data2);
        
        setMeetingLink(data.meetingLink);
        setMedicines(data2)

        


      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
   

    if (date===formattedDate) {
      fetchData();
    }
  },[formattedDate]);



  function ratefunc(event)
  {
    setRate(event.target.value);
    
  }

 function submitt()
  {

   
     // setRate(event.target.value);
      //console.log ("value = " + event.target.value)
      console.log(rate);
      
      
      //console.log(docPatIdPair);
     // console.log(doctorId + " , " +patientId)
     let temp=doctorId + " , " +patientId;
      setIdPair(temp);

      const formData =new FormData();
      formData.append("doctorId",doctorId);
      formData.append("patientId",patientId);
      formData.append("docpatIdPair",docPatIdPair)
      formData.append("rate",rate);

      fetch('http://localhost:8050/rating/save', {
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

    return(

     <div>
      <h1 id="hx">CheckUpRoom</h1>
      <div id="dm"><h3>Meeting Link </h3>
       
      <p><b><a href={meetingLink}>{meetingLink}</a></b></p>
      </div>
      
    <div id="hx2">
         <h3  id="hhhh">Medicines</h3>

    <span >{medicine.medicines}</span>
    </div> <br></br><br></br><br></br><br></br>
 
    <span id="ssss">Feedback</span>
    <textarea id="txt1"></textarea><br></br><br></br>

    <span id="hx3">Rate Doctor Out of 5 </span>&nbsp; &nbsp;
   
      <input min="1" max="5" type="number"  value={rate} onChange={ratefunc} /> &nbsp; &nbsp;
      <button onClick={submitt}>submit</button>
         
     
 
    
      
     </div>
    );
}
export default PatientCheckUpPage;