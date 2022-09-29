import React from 'react';
import { Link } from "react-router-dom";

function Starships({ ship }) {
  return (
    <div className='card'>
        <h1 className='h-element'>
            <Link to={`/starships/${ship.name.split(" ").join("")}`}>
                {ship.name}
            </Link>
        </h1>
        <span className='line'></span>
        <h3 className='h-element'> 
          <span className='title'>Ship Model:</span> {ship.model}
        </h3>
        <h3 className='h-element'>
          <span className='title' >Ship Hyperdrive Rating</span>
          <span className='rating'>{ship.hyperdrive_rating}</span>
        </h3>
    </div>
  )
}

export default Starships