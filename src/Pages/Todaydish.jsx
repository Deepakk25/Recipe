import React from 'react';
import { data } from '../Datasets';
import '../Css/Todaydish.css';

const exp = Math.floor(Math.random() * data.length); // Generate a random index based on the data length
console.log(`Random index: ${exp}`);

function Todaydish() {
  return (
    <div className="today-dish-container">
      <h1 className="today-dish-title">Today's Dish</h1>
      {data.map((item, index) => {
        if (index === exp) {
          return (
            <div key={item.id} className="today-dish-card">
              <img
                src={item.image}
                alt={item.name}
                className="today-dish-image"
              />
              <div className="today-dish-info">
                <h4 className="today-dish-name">{item.name}</h4>
                <p className="today-dish-price">Price: ${item.price.toFixed(2)}</p>
                <p className="today-dish-description">{item.description}</p>
              </div>
            </div>
          );
        }
        return null; // Render nothing if the index doesn't match
      })}
    </div>
  );
}

export default Todaydish;
