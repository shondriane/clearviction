
import './App.css';
import React,{ useState } from 'react';

import axios from 'axios';


const BASE_URL= "https://swe-applicant-challenge.vercel.app/api/challenge"
function App() {
  

  const initialFormValues = {
    email: '',
    github: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}`, formValues);
      setFormValues(initialFormValues);
  
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <header>
<img src="https://clearviction.org/static/media/cv_small_logo_dark.%201.128ba5bea18da90b96f8e2506e8518c0.svg"  alt="logo"/>
      </header>
    <h1>Registration Form </h1>
    
    <form onSubmit={handleSubmit}>
    <div className="form">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" onChange={handleChange} value={formValues.email} />
      
      
      <label htmlFor="github">Github Repo URL:</label>
      <input type="text" id="github" name="github" onChange={handleChange} value={formValues.github} />
      
      <button type="submit">Submit</button>
      </div>
    </form>
   
  </div>
  );
}

export default App;
