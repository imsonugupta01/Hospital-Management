import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS Pages/PatientDoctor.css";

function PatientDoctor() {
  let {temp}=useParams();
  console.log("temp = " + temp)
  let [disease, setDisease] = useState("");
  let [doctors, setDoctors] = useState(null);
  let [imageUrls, setImageUrls] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8050/doctor/getDoctor/${disease}`);
        const response2 = await fetch(`http://localhost:8050/doctor/getFilesName/${disease}`);

        if (!response.ok || !response2.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const imageBlobs = await Promise.all(
          (await response2.json()).map(async (imageURL) => {
            const imageResponse = await fetch(imageURL);
            return await imageResponse.blob();
          })
        );

        const imageObjectUrls = imageBlobs.map((blob) => URL.createObjectURL(blob));

        setDoctors(data);
        console.log(data)
        setImageUrls(imageObjectUrls);
        
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };

    if (disease) {
      fetchData();
    }
  }, [disease]);

  function input1(event) {
    setDisease(event.target.value);
  }

  return (
    <div>
      <div className="label-container">
        <label className="selectlabel">Choose Doctor : </label>
        <select className="ss" value={disease} onChange={input1} >
        <option value="" disabled hidden> Select a Disease</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Ophthalmologists">Ophthalmologists</option>
          <option value="Ear Specialist">Ear Specialist</option>
          <option value="Physician">Physician</option>
          <option value="Neurologists">Neurologists</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Gastroenterologists">Gastroenterologists</option>
          <option value="Endocrinologists">Endocrinologists</option>
          <option value="Nephrologists">Nephrologists</option>
          <option value="Gynecologists">Gynecologists</option>
          <option value="Pathologists">Pathologists</option>
          <option value="Physiatrists">Physiatrists</option>
          <option value="Urologists">Urologists</option>
        </select>
      </div>

     
        
          {doctors &&
            doctors.map((doctor, index) => (
              <span key={index} className="doctor-info"> 
              <Link to="#">
                
                {imageUrls[index] && (
                  <img
                    src={imageUrls[index]}
                    alt={`Doctor ${doctor.name}`}
                    className="doctor-image"
                  />
                )}
                <h2>{doctor.name}</h2>
                <p>
                  <b>{doctor.specialization}</b>
                </p>
                <p>{doctor.degree}</p>
                <p>{doctor.institueName}</p>
                <p><b>Fee : </b>{doctor.fee}</p>
               

               { <span id="s1" style={{ textAlgn: 'center' }}>
                  <button className="your-button-class"><Link to={`/PatientDoctorList/${doctor.id}/${temp}`}>Get AppointMent</Link></button>
                </span>}
                </Link>
              </span>
            ))}
        
      
    </div>
  );
}

export default PatientDoctor;
