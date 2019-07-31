import React from 'react';
import RecipeCard from '../Recipes/RecipeCard';

const RecipesList = (props) => {
  const recipesData = props.recipesData;
  return (
    <div className='recipes-list'>
      {recipesData.map((recipeData) => {
        return <RecipeCard 
          key={recipeData.id}
          recipeData={recipeData}
        />
      })}
    </div>
  )
}

export default RecipesList;