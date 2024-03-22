
import React from "react";
import {  Routes, Route } from "react-router-dom";
import PatientSignUp from "./Pages/PatientSignUp";
import HomePage from "./Pages/HomePage";
import PatientProfile from "./Pages/PatientProfile";
import DoctorSignUp from "./Pages/DoctorSignUp";
import DoctorProfile from "./Pages/DoctorProfile";
import PatientDoctor from "./Pages/PatientDoctor"
import PatientDoctorList from "./Pages/PatientDoctorList";
import CheckUpPage from "./Pages/CheckUpPage";
import PatientCheckUpPage from "./Pages/PatientCheckUpPage";
import AdminSignUp from "./Pages/AdminSignUp";
import AdminProfile from "./Pages/AdminProfile";
import TodaysPatient from "./Pages/Today's Patient";
import DocWisePatient from "./Pages/DoctorwisePatient";
import DoctorAttendenceMark from "./Pages/DoctorAttendenceMark";
import DoctorAttendenceCheck from "./Pages/DoctorAttendeceCheck";
import AddDoctorByAdmin from "./Pages/AddDoctorByAdmin";
import DeleteDoctor from "./Pages/DeleteDoctors";
import ConnectWithDoctors from "./Pages/ConnectWithDoctor";


function App()
{
    return(
      <Routes>
         <Route path="/PatientSignUp" element={<PatientSignUp/>}/>
         <Route path="/" element={<HomePage/>}/>
         <Route path ="/DoctorProfile/:temp" element={<DoctorProfile/>}/>
         <Route path="/PatientProfile/:temp" element={<PatientProfile/>}/>  
         <Route path ="/SignUpDoctor" element={<DoctorSignUp/>}/>
         <Route path ="/PatientDoctor/:temp" element={<PatientDoctor/>}/>
         <Route path="/PatientDoctorList/:doctorId/:patientId" element={<PatientDoctorList/>}/>
         <Route path="/CheckUpPage/:temp/:patientId/:date" element={<CheckUpPage/>}/>
         <Route path="/PatientmeetingRoom/:patientId/:doctorId/:date" element={<PatientCheckUpPage/>}/>
         <Route path="/Adminsignup" element={<AdminSignUp/>}/>
         {/* <Route path="/AdminProfile/:id" element={<AdminProfile/>}/> */}

         <Route path="/AdminProfile/:id" exact Component={AdminProfile}/>
         
         

         <Route path="/allPatient" element={<TodaysPatient/>}/>
         <Route path="/DocWisePatient" element={<DocWisePatient/>}/>
         <Route path="/DoctorAttendence" element={<DoctorAttendenceMark/>}/>        
         <Route path="/DoctorAttendanceCheck" element={<DoctorAttendenceCheck/>}/>
         <Route path="/AddDoctor/:id" element={<AddDoctorByAdmin/>}/>
         <Route path="/deleteDoctor" element={<DeleteDoctor/>}/>
         <Route path="/connectwithDoc" element={<ConnectWithDoctors/>}/>
      
               </Routes>
    );
}
export default App

