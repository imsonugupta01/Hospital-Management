
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../CSS Pages/PatientSignUp.css"

function PatientSignUp() {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [file, setFile] = useState(null);
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  function input1(event) {
    setPatientName(event.target.value);
  }

  function input2(event) {
    setAge(event.target.value);
  }

  function input3(event) {
    setAddress(event.target.value);
  }

  function input4(event) {
    setContactNumber(event.target.value);
  }

  function input5(event) {
    setGender(event.target.value);
  }

  function input6(event) {
    setFile(event.target.files[0]);
  }
  function input7(event)
  {
    setUsername(event.target.value)
  }
  function input8(event)
  {
    setPassword(event.target.value)
  }


  function ChangeHandler(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('patientName', patientName);
    formData.append('age', age);
    formData.append('address', address);
    formData.append('contactNumber', contactNumber);
    formData.append('gender', gender);
    formData.append('username',username);
    formData.append('password',password);
    formData.append('patientImage', file);
    

    fetch('http://localhost:8050/patient/uploadPatient', {
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

  return (
    <div id="registrationPageContainer">
      <h1>Registration Page</h1>
      <form classname="patientForm">
        <label className="label">Enter Patient Name:</label>
        <input type="text" className="input" value={patientName} onChange={input1} /><br />

        <label>Age: </label>
        <input type='number' className="input" value={age} onChange={input2} /><br />

        <label>Address: </label>
        <input type="text" className="input" value={address} onChange={input3} /><br />

        <label>Contact Number: </label>
        <input type="text" className="input" value={contactNumber} onChange={input4} /><br />

        <label>Gender: </label>
        <input type='text' className="input" value={gender} onChange={input5} /><br />

        <label>username: </label>
        <input type='text' className="input" value={username} onChange={input7} /><br />

        <label>password: </label>
        <input type='password'className="input" value={password} onChange={input8} /><br />

        <label>Select Image:</label>
        <input type='file'className="input" onChange={input6} />

        <button onClick={ChangeHandler}><Link to="/">Register</Link></button>
      </form>
    </div>
  );
}

export default PatientSignUp;
