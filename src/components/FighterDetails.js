import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function FighterList(props) {
 
  // Si hay un luchador seleccionado, mostramos los detalles
 
  return (
    <div className='styles-data-fighter'>
      <div>
        <h1>Data of fighter</h1>
        <div>
          <p><strong>Name:</strong> {props.details.name}</p>
          <p><strong>Category:</strong> {props.details.category}</p>
          <p><strong>Age:</strong> {props.details.age}</p>
          <p><strong>Place of birth:</strong> {props.details.placeOfBirth}</p>
          <p><strong>Wins:</strong> {props.details.wins}</p>
          <p><strong>Losses:</strong> {props.details.losses}</p>
          <p><strong>fightingStyle:</strong> {props.details.fightingStyle}</p>
          <p><strong>Weight:</strong> {props.details.weight}Lbs</p>
          <div className='styles-img'> <img src={props.details.imgUrl} alt={props.details.name} width ="400px" height="400px" /></div>
        </div>
         
        <button onClick={() => props.onSelect(null)} className='btn-return'>Volver a la Lista</button>
      </div>
    </div>
  );
}
