import React from 'react';
import './App.css'
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Recipe from './Pages/Recipe';
import Todaydish from './Pages/Todaydish';
import "../src/Css/Navbar.css"


const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/Recipe" element={<Recipe/>} />
      <Route path="/Todaydish" element={<Todaydish/>} />
    </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
