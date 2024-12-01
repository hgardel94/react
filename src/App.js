import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [fighters, setFighters] = useState([]);
 
  React.useEffect(() => {
    axios.get('https://api.octagon-api.com/fighters').then((response) => {
      setFighters(response.data);
    });

  }, []);
  {Object.values(data).map(fighter => fighter.name)};
  console.log(fighters);
  <ul>
  
   
  <li key={fighters.name}>{fighters.name}</li>

  </ul>
  
  console.log(fighters);


};

export default App;
