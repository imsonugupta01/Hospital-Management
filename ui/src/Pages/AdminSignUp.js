import React, { useState } from "react";
import "../CSS Pages/AdminSignUp.css";
function AdminSignUp()
{  
    let[Name,setName]=useState();
    let[Designation,setDesignation]=useState();
    let[Gender,setGender]=useState();
    let[DOB,setDob]=useState();
    let[Age,setAge]=useState();
    let[Address,setAddress]=useState();
    let[Email,setEmail]=useState();
    let[ContactNumber,setContactNumber]=useState();
    let[username,setUsername]=useState();
    let[password,setPassword]=useState();
    let[file,setFile]=useState(null);


    function input1(event)
    {
        setName(event.target.value)
        console.log(event.target.value)
    }

    function input2(event)
    {
        setDesignation(event.target.value)
        console.log(event.target.value)
    }

    function input3(event)
    {
        setGender(event.target.value)
        console.log(event.target.value)
    }
    function input4(event)
    {
        setDob(event.target.value)
        console.log(event.target.value)
    }

    function input5(event)
    {
        setAge(event.target.value)
        console.log(event.target.value)
    }

    function input6(event)
    {
        setAddress(event.target.value)
        console.log(event.target.value)
    }

    function input7(event)
    {
        setEmail(event.target.value)
        console.log(event.target.value)
    }
    function input8(event)
    {
        setContactNumber(event.target.value)
        console.log(event.target.value)
    }
    function input9(event)
    {
        setUsername(event.target.value)
        console.log(event.target.value)
    }
    function input10(event)
    {
        setPassword(event.target.value)
        console.log(event.target.value)
    }

    function input11(event)
    {
        setFile(event.target.files[0])
        //console.log(event.target.value)
    }
    
    function submit(event)
    {    event.preventDefault();

         console.log("soni")
        const formData=new FormData();
        formData.append('AdminName',Name);
        formData.append('Designation',Designation);
        formData.append('Gender',Gender);
        formData.append('DOB',DOB);
        formData.append('Age',Age);
        formData.append('Address',Address);
        formData.append('Email',Email);
        formData.append('ContactNumber',ContactNumber);
        formData.append('Username',username);
        formData.append('Password',password);
        formData.append('Image',file);
          
        fetch('http://localhost:8050/admin/uploadAdmin', {
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
        <div id="registrationPageContainer">
        <h1> Admin SignUp Form</h1><br></br>
        <form classname="adminForm">

        
           <label className="label">Enter Name :</label>
           <input className="input" value={Name}  onChange={input1}/><br></br>

           <label>Enter Designation :</label>
           <input className="input" value={Designation} onChange={input2}/><br></br>


           <label>Enter Gender :</label>
           <input  className="input"value={Gender} onChange={input3}/><br></br>


           <label>Enter DOB :</label>
           <input className="input" value={DOB} onChange={input4}/><br></br>



           <label>Enter Age :</label>
           <input className="input" value={Age} onChange={input5}/><br></br>


           <label>Enter Address :</label>
           <input className="input" value={Address} onChange={input6}/><br></br>


           <label>Enter Email :</label>
           <input className="input" value={Email} onChange={input7}/><br></br>

           <label>Enter ContactNumber :</label>
           <input className="input" value={ContactNumber} onChange={input8}/><br></br>

           <label>Username :</label>
           <input className="input" value={username} onChange={input9}/><br></br>

           <label>Password :</label>
           <input className="input" value={password} onChange={input10}/><br></br>

           <label>Choose Photo</label>
           <input className="input" type="file"  onChange={input11}/>



  </form>
  <button onClick={submit}>SignUp</button>
           


        </div>
    );
}
export default AdminSignUp;