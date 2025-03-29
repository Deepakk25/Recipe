import React from "react";
import "../Css/Home.css"; 
import { useNavigate} from 'react-router-dom'
import { useState } from "react";
import { data } from '../Datasets.js';
import trendingRecipes from "../Pages/Trending.js"
const Home = () => {
const navigate = useNavigate()
const [searchQuery, setSearchQuery] = useState("");
const [filteredRecipes, setFilteredRecipes] = useState(trendingRecipes);



const handleClick = () => {
  navigate('/Recipe')  // Navigates to the /Recipe route
}


const handleSearch = () => {
 
    // Filter recipes based on the search query
    const filtered = trendingRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }


return (
    
    <div className="home-container">
      {/* Welcome Banner */}
      {/* <section className="welcome-bannerr"> */}
        <section className="DivBlock">
        <h1>Welcome to Meal Recommender</h1>
        <h3 className="header1">Your ultimate guide to discovering delicious recipes!</h3>
       </section>
       
        <button className="cta-button1" onClick={handleClick} >Explore Recipes</button>
      {/* </section> */}




      {/* Search Bar */}
      <section className="search-section">
        <h2>Find Your Next Meal</h2>
        <input
        type="text"
        placeholder="Search for recipes, ingredients, or cuisines"
        className="search-bar"
        value={searchQuery}
        onChange={(e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredRecipes(
      query ? trendingRecipes.filter(recipe => recipe.name.toLowerCase().includes(query)) : trendingRecipes
    );
  }}
/>
        <button className="search-button" onClick={handleSearch} >Search</button>
      </section>

     
      {/* Trending Recipes */}
      <section className="trending-section">
        <h2>Trending Recipes</h2>
        <div className="recipe-cards">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <img src={recipe.image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <button className="view-button">View Recipe</button>
              </div>
            ))
          ) : (
            <p>No recipes found for "{searchQuery}"</p>
          )}
        </div>
      </section>

      
 
   {/* Footer */}
   <footer className="footer">
   <p>© 2025 Meal Recommender. All Rights Reserved.</p>
   </footer>
    </div>
  );
};

export default Home;
