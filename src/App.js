import logo from './logo.svg';
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

return(
    <div>
     
     <table
      style={{
        borderCollapse: "collapse",
        border: "2px solid rgb(140, 140, 140)",
        fontFamily: "sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "1px",
      }}
    >
      <th><h1>Fighters list</h1></th>
      <tbody>
  {Object.values(fighters).map((fighter, id) => {
    return (
      <div style={{display: "inline-flex",
        margin: 0,
        padding: 0,
        width: "33%",
        border: "1px solid rgb(160 160 160)",
        }}>
      <tr key={id} style={{display: "inline-block",
      position:"relative",
      left:"40%",
      
        }}>
       

          
          <td><th>{id+1}{fighter.name}</th><img src={fighter.imgUrl} width="80px" height="80px"></img></td>
         </tr>
         </div>
         
         
        
    );
  })};
 </tbody>
</table>
</div>
);
};



export default App;
