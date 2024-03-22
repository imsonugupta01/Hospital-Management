import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import AdminSignUp from "./AdminSignUp";
function Login()
{






  useEffect(() => {

      
    const fetchData = async () => {
      try {
        
        let  response = await fetch(`http://localhost:8050/patient/getPatientId/${username}/${password}`);
       
        
       
      
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
    return(
    <div>
      <label>Enter Username: </label><br></br>
      <input type="text"/><br></br>

      <label>Enter Password :</label>
      <input type="password"/>

      <button Link to="/AdminSignUp">SignUp</button>
      <Route path ="/AdminSignUp" element={<AdminSignUp/>}/>

      <button><Link to="/AdminSignUp">SignUp</Link></button>

      <button><Link to={`/AdminProfile/${Id}`}>Login</Link></button>

      
    </div>
    );
}
export default Login;