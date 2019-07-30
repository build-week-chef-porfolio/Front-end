import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';


import Login from './login';

//import useLocalStorage from './authorization/useLocalStorage'

import Header from './components/Header/Header';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';
import RecipeCard from './components/Recipes/RecipeCard.js';
import RecipeDetailed from './components/Recipes/RecipeDetailed';
import FindChefsForm from './components/Forms/FindChefs';
import BrowseRecipeForm from './components/Forms/BrowseRecipe';
import RecipesFilter from './components/Recipes/RecipesFilter';


function App() {

  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">

      <Login />

      <Header />
      <HomePageContainer />
      <RecipeCard />
      <RecipesFilter />
      <Footer />

    </div>
  );
}

export default App;
