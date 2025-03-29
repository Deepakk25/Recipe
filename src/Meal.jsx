import React from 'react'
import { data } from './Datasets'

const Meal = (props) => {
  return (
    <>
    <h3>Meal Recommender</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>{item.description}</p>
            <img src={item.image} alt={item.name} width="200" height="300" />
          </li>
        ))}
      </ul>
      </>
  )
}

export default Meal