import React, { useState, useEffect } from 'react';
import SingleRecipesCard from './SingleRecipesCard';
import DropdownFilterSearchInMenu from '../Recipes/RecipesFilter';

const SingleRecipesList = (props) => {
  const recipesData = props.recipesData;
  return (
    <>
    <div className='recipes-filter'>
      <DropdownFilterSearchInMenu recipesData={recipesData} />
    </div>
    
    <div className='recipes-list'>
      
      {recipesData.map((recipeData) => {
        return <SingleRecipesCard 
          key={recipeData.id}
          recipeData={recipeData}
        />
      })}
    </div>
    </>
  )
}

export default SingleRecipesList;