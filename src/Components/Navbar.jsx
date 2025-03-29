import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Recipe" className="nav-link">Recipe</Link>
            </li>
            <li className="nav-item">
              <Link to="/Todaydish" className="nav-link">Todaydish</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
