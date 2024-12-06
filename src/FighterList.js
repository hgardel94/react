import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function ShowFighters() {
  const [fighters, setFighters] = useState({}); // Estado para almacenar los luchadores (usamos un objeto)
  const [fighterSelected, setFighterSelected] = useState(null); // Estado para el luchador seleccionado

  // Llamada a la API para obtener los luchadores
  useEffect(() => {
    axios.get('https://api.octagon-api.com/fighters')
      .then((response) => {
        setFighters(response.data);  // Guardamos los luchadores obtenidos de la API
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);  // Solo se ejecuta una vez al cargar el componente

  // Si no hay luchador seleccionado, mostramos la lista
  if (fighterSelected === null) {
    return (
      <div className="styles-container">
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/UFC_logo.svg' alt="img not found"className='styles-logo'></img>

          <table className="styles-container">
              <tbody>
              {Object.values(fighters).map((fighter, id) => {
                return (
                    <div className='styles-row'>
                    <tr key={id} className='style-tr'
                         onClick={() => setFighterSelected(id)}>
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

  // Si hay un luchador seleccionado, mostramos los detalles
  const selectedFighter = Object.values(fighters)[fighterSelected];
  return (
    <div className='styles-data-fighter'>
      <div>
        <h1>Data of fighter</h1>
        <div>
          <p><strong>Name:</strong> {selectedFighter.name}</p>
          <p><strong>Category:</strong> {selectedFighter.category}</p>
          <p><strong>Age:</strong> {selectedFighter.age}</p>
          <p><strong>Place of birth:</strong> {selectedFighter.placeOfBirth}</p>
          <p><strong>Wins:</strong> {selectedFighter.wins}</p>
          <p><strong>Losses:</strong> {selectedFighter.losses}</p>
          <p><strong>fightingStyle:</strong> {selectedFighter.fightingStyle}</p>
          <p><strong>Weight:</strong> {selectedFighter.weight}Lbs</p>
          <div className='styles-img'> <img src={selectedFighter.imgUrl} alt={selectedFighter.name} width ="400px" height="400px" /></div>
        </div>
         
        <button onClick={() => setFighterSelected(null)} className='btn-return'>Volver a la Lista</button>
      </div>
    </div>
  );
}
