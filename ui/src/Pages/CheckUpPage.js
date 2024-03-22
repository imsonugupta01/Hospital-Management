import React, { useState } from "react";
import "../CSS Pages/CheckUpPage.css"
import { useParams } from "react-router-dom";
function CheckUpPage()
{   let {temp,patientId,date}=useParams();  //temp me doctor ka id aa rha h
   console.log(temp +patientId)
   console.log(date);
   let[MeetingLink,setMeetingLink]=useState("");

   let[Medicines,setMedicines]=useState();

   function input1(event){
    setMeetingLink(event.target.value)
    console.log(event.target.value)
   }
    
   function input2(event)
   {
    console.log(event.target.value)
    setMedicines(event.target.value)
  }
   function clickHandle()
   {  
      const formData=new FormData();
      formData.append('doctorId',temp)
      formData.append('patientId',patientId)
      formData.append('date',date)
      formData.append('meetingLink',MeetingLink);



    fetch('http://localhost:8050/connection/setMeetingLink', {
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
      alert("sent")

   }

   function clickHandle2()
   {
       const formData=new FormData();
       formData.append('doctorId',temp)
       formData.append('patientId',patientId)
       formData.append('date',date)
       formData.append('Medicine',Medicines)

       fetch('http://localhost:8050/medicine/save', {
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
      alert("sent")

   }


    return(
        <div>
       
        <h1 id="gdlck">Good Luck 😊👍</h1> 
        <div id="meetlinkdiv">
       <label>Meeting Link : </label>
       <input id="i1" type="text" onChange={input1}/> <br></br><br></br>
       <button id="btt1" onClick={clickHandle}>Send to Patient</button>


       <br></br><br></br><br></br><br></br>
       <label><b>Write Prescription After CheckUp:</b></label>
       <input  id="i2" value={Medicines} onChange={input2} type="text" />
       <button id="btt2" onClick={clickHandle2}>Send</button>
       </div>

      
        </div>

    );
}
export default CheckUpPage