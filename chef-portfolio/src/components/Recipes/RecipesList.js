import React from 'react';
import RecipeCard from '../Recipes/RecipeCard';
import DropdownFilterSearchInMenu from './RecipesFilter';
const RecipesList = (props) => {
  const recipesData = props.recipesData;
  return (
    <>
    <div className='recipes-filter'>
      <DropdownFilterSearchInMenu recipesData={recipesData} />
    </div>
    
    <div className='recipes-list'>
      
      {recipesData.map((recipeData) => {
        return <RecipeCard 
          key={recipeData.id}
          recipeData={recipeData}
        />
      })}
    </div>
    </>
  )
}

export default RecipesList;