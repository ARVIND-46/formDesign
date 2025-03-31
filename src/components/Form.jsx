import '../styles/Styles.css'
import React, { useState } from 'react';
import { db } from '../firebase'; // Ensure correct Firestore import
import { collection, addDoc } from "firebase/firestore"; 

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    teamName: '',
    teamId: '',
    college: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Adding data to Firestore "teams" collection
      const docRef = await addDoc(collection(db, "teams"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert("Data successfully added!");

      // Clear form after submission
      setFormData({
        name: '',
        teamName: '',
        teamId: '',
        college: '',
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(`Failed to add data! ${error.message}`);
    }
  };

  return (
    <div className='form'>
      <label htmlFor="name">NAME:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="teamName">TEAM NAME:</label>
      <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} />

      <label htmlFor="teamId">TEAM ID:</label>
      <input type="text" name="teamId" value={formData.teamId} onChange={handleChange} />

      <label htmlFor="college">COLLEGE:</label>
      <input type="text" name="college" value={formData.college} onChange={handleChange} />

      <button onClick={handleSubmit}>Save</button> {/* ✅ Call handleSubmit onClick */}
    </div>
  );
};

export default Form;
