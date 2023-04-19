
import './App.css';
import React,{ useState } from 'react';
import fetch from 'node-fetch'


const BASE_URL= "https://swe-applicant-challenge.vercel.app/api/challenge"
const App= ()=> {
  

  const initialFormValues = {
    email: '',
    githubRepoUrl: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        alert('Form submitted successfully! We will be in touch.');
        setFormValues(initialFormValues);
      } else {
        console.error('Error:', response.statusText);
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
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
      
      
      <label htmlFor="githubRepoUrl">Github Repo URL:</label>
      <input type="text" id="githubRepoUrl" name="githubRepoUrl" onChange={handleChange} value={formValues.githubRepoUrl} />
      
      <button type="submit">Submit</button>
      </div>
    </form>
   
  </div>
  );
}

export default App;
