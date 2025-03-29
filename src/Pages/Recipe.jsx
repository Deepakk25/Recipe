import React from 'react';
import { data } from '../Datasets.js';
import "../Css/Recipe.css";
import { useState } from 'react';



function Recipe() {
  const [sear,setsear]=useState("")
  const [itemss,settitems]=useState(data)
  return (

    <div className="recipe-container">
    <h3 className="recipe-header">Meal Recommender</h3>

    <input
    type="text"
    placeholder="Search for recipes, ingredients, or cuisines"
    className="search-barq"
    value={sear}
    onChange={(e)=>{
      const search = e.target.value.toLowerCase();

      setsear(search)
      
      settitems(
        search?data.filter(e=>e.name.toLowerCase().includes(search)):data
      );
    }
    }
/>
    

      <ul className="recipe-list">
        {itemss.map((item) => (
          <li key={item.id} className="recipe-item">
            <div className="recipe-info">
              <h4 className="recipe-name">{item.name}</h4>
              <p className="recipe-price">Price: ${item.price.toFixed(2)}</p>
              <p className="recipe-description">{item.description}</p>
              <img
                src={item.image}
                alt={item.name}
                className="recipe-image"
                width="200"
                height="300"
              />
            </div>

          </li>
    ))}
          

          
    
        
      </ul>
    </div>
  );
}

export default Recipe;
