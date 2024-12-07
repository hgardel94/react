import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function FighterList(props) {
  const [fighters, setFighters] = useState({}); 
  const [fighterSelected, setFighterSelected] = useState(null); 
  

  
  useEffect(() => {
    axios.get('https://api.octagon-api.com/fighters')
      .then((response) => {
        setFighters(response.data);  
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);  

    return (
      <div className="styles-container">
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/UFC_logo.svg' alt="img not found"className='styles-logo'></img>

          <table className="styles-container">
              <tbody>
              {Object.values(fighters).map((fighter, id) => {
                return (
                    <div className='styles-row'>
                    <tr key={id} className='style-tr'
                         onClick={() => props.onSelect(fighter)}>
                        <td><th>{id+1}{fighter.name}</th>
                        <img src={fighter.imgUrl} width="80px" height="80px"></img>
                        </td>
                       </tr>
                       </div>
                  );
                })};
            </tbody>
          </table>
        </div>
    );
  }
