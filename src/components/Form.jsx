
import '../styles/Styles.css'
import React,{useState} from 'react'

const Form = () => {
  const [formData,setFormData] = useState({
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
      <button>Save</button>
    </div>
  )
}

export default Form