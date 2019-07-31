import React, { useState, useEffect } from 'react';
import RecipeCard from '../Recipes/RecipeCard';

const RecipesList = (props) => {
  const recipesData = props.recipesData;
  return (
    <>
      {recipesData.map((recipeData) => {
        return <RecipeCard 
          key={recipeData.id}
          recipeData={recipeData}
        />
      })}
    </>
  )
}

export default RecipesList;