
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";


function AddDoctorByAdmin() {
    let {id}=useParams();
  const [doctortName, setDoctorName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const[degree,setDegree]=useState('')
  const[instituteName,setInstituteName]=useState('')
  const[specialization,setSpecialization]=useState('')
  const[email,setEmail]=useState('')
  const[fee,setFee]=useState('')

  const [file, setFile] = useState(null);
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  function input1(event) {
    setDoctorName(event.target.value);
  }

  function input2(event) {
    setAge(event.target.value);
  }

  function input5(event) {
    setAddress(event.target.value);
  }

  function input4(event) {
    setContactNumber(event.target.value);
  }

  function input3(event) {
    setGender(event.target.value);
  }

  function input6(event) {
    setFile(event.target.files[0]);
  }
  function input7(event) {
    setEmail(event.target.value);
  }

  function input8(event) {
    setSpecialization(event.target.value);
  }
  function input9(event) {
    setDegree(event.target.value);
  }
  function input10(event) {
    setInstituteName(event.target.value);
  }

  function input11(event)
  {
    setUsername(event.target.value)
  }
  function input12(event)
  {
    setPassword(event.target.value)
  }
  function input13(event)
  {
    setFee(event.target.value)
  }

 
 
 
  


  function ChangeHandler(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', doctortName);
    formData.append('age', age);
    formData.append('address', address);
    formData.append('contactNumber', contactNumber);
    formData.append('gender', gender);
    formData.append('degree', degree);
    formData.append('specialization', specialization);
    formData.append('instituteName', instituteName);
    formData.append('email', email);
    formData.append('username',username);
    formData.append('password',password);
    formData.append('doctorImage', file);
    formData.append('fee',fee);
    

    fetch('http://localhost:8050/doctor/uploadDoctor', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        console.log('SignUp successful:', data);
        alert("Added succesfully")
      })
      .catch(error => {
        console.error('Error during SignUp:', error);
      });
  }

  return (
    <div id="registrationPageContainer">
      <h1>New Doctor Registration</h1>
      <form classname="doctorForm">
        <label className="label">Enter Doctor Name:</label>
        <input type="text" className="input" value={doctortName} onChange={input1} /><br />

        <label>Age: </label>
        <input type='number' className="input" value={age} onChange={input2} /><br />

        <label>Address: </label>
        <input type="text" className="input" value={gender} onChange={input3} /><br />

        <label>Contact Number: </label>
        <input type="text" className="input" value={contactNumber} onChange={input4} /><br />

        <label>Gender: </label>
        <input type='text' className="input" value={address} onChange={input5} /><br />

        <label>Select Image:</label>
        <input type='file'className="input" onChange={input6} />

        <label>email: </label>
        <input type='email'className="input" value={email} onChange={input7} /><br />

        <label>specialization: </label>
        <input type='text' className="input" value={specialization} onChange={input8} /><br />

        <label>degree: </label>
        <input type='text'className="input" value={degree} onChange={input9} /><br />

        <label>instituteName: </label>
        <input type='text'className="input" value={instituteName} onChange={input10} /><br />

        <label>Patient Checkup Fee: </label>
        <input type='text'className="input" value={fee} onChange={input13} /><br />

        <label>username: </label>
        <input type='text'className="input" value={username} onChange={input11} /><br />

        <label>password: </label>
        <input type='password'className="input" value={password} onChange={input12} /><br />



       

        <button onClick={ChangeHandler}><Link to={`/AdminProfile/${id}`}>Add</Link></button>
      </form>
    </div>
  );
}

export default AddDoctorByAdmin;
