import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS Pages/HomePage.css"
function HomePage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Id, setId] = useState("");
    let[Person,setPerson]=useState(null)

    function ChangeHandler(event)
    {
        setPerson(event.target.value)
        console.log(event.target.value);
    }
  
    function input1(event) {
      setUsername(event.target.value);
    }
  
    function input2(event) {
      setPassword(event.target.value);
    }

    
  
    useEffect(() => {

      
      const fetchData = async () => {
        try {
          
          let response
          if(Person==="Patient")
           response = await fetch(`http://localhost:8050/patient/getPatientId/${username}/${password}`);
          if(Person==="Doctor")
           response = await fetch(`http://localhost:8050/doctor/getDoctorId/${username}/${password}`);
          if(Person==="Admin")
           response = await fetch(`http://localhost:8050/admin/getAdminId/${username}/${password}`);
        
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log("sonu");
          console.log(data);
          setId(data);
        } catch (error) {
          console.error('Error fetching data: ', error.message);
        }
      };
    

       if(username || password)
          {  console.log(username +" " + password )
            fetchData();}

    }, [username, password]);
  
    return (
      <div id="homePageContainer">
        <form className="formContainer">
         
          <select class="ss"value={Person} onChange={ChangeHandler}>
          

            <option  >Admin</option>
            <option  >Admin</option>
            <option  >Doctor</option>
            <option  >Employee</option>
            <option  >Patient</option>
            <option  >Chemist</option>

           
          </select>


          <label>Username: </label>
          <input type="text" value={username} onChange={input1} /><br />
  
          <label>Password: </label>
          <input type="password" value={password} onChange={input2} />
       
        
        <button><Link to={`/${Person}Profile/${Id}`}>Login</Link></button>
        <br></br>
        <br></br>
        don't have an account ?
        

        {/* <button><Link to="/SignUpDoctor">Doctor SignUp</Link></button> */}

  

         <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><Link to="/PatientSignUp">Register Patient</Link></span>
        {/* <button><Link to ="/AdminSignup">Admin SignUP</Link></button> */}
        </form>

  
        
      </div>
    );
  }
  
  export default HomePage;