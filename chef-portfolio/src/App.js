import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';


import Login from './login';

//import useLocalStorage from './authorization/useLocalStorage'

import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';


import AppRouter from './AppRouter';

import RecipeCard from './components/Recipes/RecipeCard.js';
<<<<<<< HEAD
import BlogCard from './components/Blog/BlogCard';
import BlogSingle from './components/Blog/BlogSingle';
import BioPage from './components/Bio/BioPage';
import SingleHome from './components/SingleUser/SingleHome';
=======
// import RecipeDetailed from './components/Recipes/RecipeDetailed';
// import FindChefsForm from './components/Forms/FindChefs';
// import BrowseRecipeForm from './components/Forms/BrowseRecipe';
import RecipesFilter from './components/Recipes/RecipesFilter';


>>>>>>> e26683cb5070514de12e66996dcbac5ba0a44a8a

function App() {

  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <HomePageContainer />
      <RecipeCard />
      <BlogCard />
      <BlogSingle />
      <BioPage />
      <SingleHome />
=======

      <Login />

      <AppRouter />

>>>>>>> e26683cb5070514de12e66996dcbac5ba0a44a8a
      <Footer />

    </div>
  );
}

export default App;
