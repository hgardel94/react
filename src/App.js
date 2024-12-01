import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    axios.get('https://api.octagon-api.com/fighters').then((response) => {
      setFighters(response.data);
    });

  }, []);

  return (
    <div>
      {Object.values(fighters).map((fighter, id) => {
        return (
          <div key={id}>
            <h1>{fighter.name}</h1>
          </div>
        );
      })};
    </div>
  );
};

export default App;
