import React, { useState, useEffect } from 'react';
import axios from 'axios'

import RecipeCard from '../Recipes/RecipeCard';

const RecipesList = () => {

  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    axios.get('https://chefs-portfolio.herokuapp.com/api/users/post')
      .then(response => {
        setRecipeData(response.data.posts);
      })
  }, []);

  return (
    <>
      {recipeData.map((recipe) => {
        return <p>{recipe.title}</p>
      })}
    </>
  )
}

export default RecipesList;